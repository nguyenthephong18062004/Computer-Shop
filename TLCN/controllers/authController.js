const crypto = require("crypto");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const { connect } = require("getstream");
const { Op } = require("sequelize");
const User = require("./../models/userModel");
const Review = require("./../models/reviewModel");
const Order = require("./../models/orderModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const sendEmail = require("./../utils/email");

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const changeState = async (user, state, statusCode, res) => {
  user.active = state;
  const message = "Cập nhật trạng thái user thành công!!!";
  await user.save();
  const userData = user.toJSON();
  delete userData.password;

  res.status(statusCode).json({
    status: "success",
    data: {
      user: userData,
    },
    message,
  });
};

exports.changeStateUser = catchAsync(async (req, res, next) => {
  const token = req.cookies.jwt;
  const state = req.body.state;
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await User.findByPk(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(
        "The user belonging to this token does no longer exist.",
        401
      )
    );
  }
  changeState(currentUser, state, 200, res);
});

const createSendToken = async (user, statusCode, res) => {
  const token = signToken(user.id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);
  res.locals.user = user;

  const userData = user.toJSON ? user.toJSON() : user;
  delete userData.password;

  const serverClient = connect(api_key, api_secret, app_id);
  const tokenStream = serverClient.createUserToken(user.id.toString());

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user: userData,
    },
    tokenStream,
  });
};

const sendVerifyToken = catchAsync(async (user, statusCode, res) => {
  const verifyToken = user.createVerifyToken();
  await user.save();
  
  const token = signToken(user.id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);
  
  const verifyURL = `https://hctech.onrender.com/verify`;
  const message = `Bạn là chủ tài khoản? Vui lòng xác nhận tài khoản tại:  ${verifyURL}.\nMã xác nhận: ${verifyToken}\n.Nếu không phải, vui lòng bỏ qua mail này!`;
  
  const userData = user.toJSON ? user.toJSON() : user;
  delete userData.password;
  
  try {
    await sendEmail({
      email: user.email,
      subject: "verify User",
      message,
    });
    res.status(statusCode).json({
      status: "success",
      token,
      data: {
        user: userData,
      },
      message: "Token sent to email!",
    });
  } catch (err) {
    console.log(err);
  }
});

exports.verifyUser = catchAsync(async (req, res, next) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.body.encode)
    .digest("hex");
  
  const user = await User.findOne({
    where: { userVerifyToken: hashedToken }
  });
  
  if (!user) {
    return next(new AppError("Mã xác nhận không hợp lệ hoặc đã hết hạn", 400));
  }
  
  user.active = "active";
  user.userVerifyToken = null;
  await user.save();

  createSendToken(user, 200, res);
});

exports.signup = catchAsync(async (req, res, next) => {
  const userExist = await User.findOne({ where: { email: req.body.email } });
  
  if (userExist) {
    return next(new AppError("Email này đã được đăng ký.", 500));
  }
  
  // Validate password confirm
  if (req.body.password !== req.body.passwordConfirm) {
    return next(new AppError("Nhập lại mật khẩu chưa đúng!", 400));
  }
  
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  sendVerifyToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Vui lòng cung cấp email và mật khẩu!", 400));
  }
  
  const user = await User.findOne({ 
    where: { email: email.toLowerCase() }
  });

  if (!user || !(await user.correctPassword(password.toString(), user.password))) {
    return next(new AppError("Email hoặc mật khẩu không chính xác", 401));
  }
  
  if (user.active == "verify") {
    sendVerifyToken(user, 201, res);
  } else {
    createSendToken(user, 200, res);
  }
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }
  } catch (error) {
    return next(
      new AppError(
        "Bạn chưa đăng nhập hoặc đăng ký. Vui lòng thực hiện!!!",
        401
      )
    );
  }

  if (!token) {
    return next(
      new AppError(
        "Bạn chưa đăng nhập hoặc đăng ký. Vui lòng thực hiện!!!",
        401
      )
    );
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await User.findByPk(decoded.id);

  if (!currentUser) {
    return next(new AppError("Token người dùng không còn tồn tại.", 401));
  }

  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError(
        "Tài khoản gần đây đã thay đổi mật khẩu! Xin vui lòng đăng nhập lại.",
        401
      )
    );
  }

  req.user = currentUser;
  next();
});

exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      const currentUser = await User.findByPk(decoded.id);
      if (!currentUser) {
        return next();
      }
      res.locals.user = currentUser;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (req.user == undefined || !roles.includes(req.user.role)) {
      return next(new AppError("Bạn không có quyền thực hiện", 403));
    }
    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) {
    return next(
      new AppError(
        "Tài khoản này không tồn tại. Vui lòng đăng ký để sử dụng",
        404
      )
    );
  }

  const resetToken = user.createPasswordResetToken();
  await user.save();

  const resetURL = `${req.protocol}://${req.get("host")}/forgot-password`;

  const message = `Bạn quên mật khẩu? Mã xác nhận của bạn: ${resetToken}.\nĐổi mật khẩu mới tại : ${resetURL}.\nNếu không phải bạn, vui lòng bỏ qua email này!`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Your password reset token (valid for 10 min)",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (err) {
    console.log(err);
    user.passwordResetToken = null;
    user.passwordResetExpires = null;
    await user.save();

    return next(
      new AppError(
        "Đã có lỗi xảy ra trong quá trình gửi mail. Vui lòng thực hiện lại sau!"
      ),
      500
    );
  }
});

exports.verifyResetPass = catchAsync(async (req, res, next) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.body.token)
    .digest("hex");
  
  const user = await User.findOne({
    where: {
      passwordResetToken: hashedToken,
      passwordResetExpires: { [Op.gt]: Date.now() }
    }
  });
  
  if (!user) {
    return next(new AppError("Token không hợp lệ hoặc đã hết hạn", 400));
  }
  
  res.status(200).json({
    status: "success",
    hashedToken,
  });
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({
    where: {
      passwordResetToken: req.params.token,
      passwordResetExpires: { [Op.gt]: Date.now() }
    }
  });
  
  if (!user) {
    return next(new AppError("Token không hợp lệ hoặc đã hết hạn", 400));
  }
  
  if (req.body.password !== req.body.passwordConfirm) {
    return next(new AppError("Nhập lại mật khẩu chưa đúng!", 400));
  }
  
  user.password = req.body.password;
  user.passwordResetToken = null;
  user.passwordResetExpires = null;
  await user.save();

  createSendToken(user, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findByPk(req.user.id);

  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError("Mật khẩu hiện tại chưa chính xác.", 401));
  }

  if (req.body.password !== req.body.passwordConfirm) {
    return next(new AppError("Nhập lại mật khẩu chưa đúng!", 400));
  }

  user.password = req.body.password;
  await user.save();

  createSendToken(user, 200, res);
});

exports.logout = (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
};

exports.googleLogin = catchAsync(async (req, res) => {
  const email = req.body.email;
  const data = await User.findOne({ where: { email } });
  
  if (!data) {
    return res.status(400).json({ message: "Tài khoản này không tồn tại" });
  }
  
  if (data.role == "admin") {
    createSendToken(data, 200, res);
  } else {
    res.status(400).json({ message: "Tài khoản này không được phép truy cập" });
  }
});

exports.userLoginWith = catchAsync(async (req, res, next) => {
  const { email, displayName, emailVerified } = req.body.user;
  const data = await User.findOne({ where: { email } });
  
  if (!data) {
    const password = email + process.env.JWT_SECRET;
    const newUser = await User.create({
      email,
      password,
      name: displayName,
      active: "active",
    });
    createSendToken(newUser, 200, res);
  } else {
    if (data.active == "ban") {
      return next(new AppError("Tài khoản của bạn đã bị ban.", 401));
    }
    if (data.active == "verify") {
      data.active = "active";
      await data.save();
    }
    createSendToken(data, 200, res);
  }
});
