const User = require("./../models/userModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError("Trang này không dùng để thay đổi mật khẩu", 400));
  }

  // 2) Filtered out unwanted fields names that are not allowed to be updated,this is all field can update:
  const filteredBody = filterObj(
    req.body,
    "name",
    "avatar",
    "gender",
    "dateOfBirth",
    "phone"
  );

  // 3) Update user document
  const user = await User.findByPk(req.user.id);
  if (!user) {
    return next(new AppError("User not found", 404));
  }

  await user.update(filteredBody);
  await user.reload();

  res.status(200).json({
    status: "success",
    data: {
      user: user,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  const user = await User.findByPk(req.user.id);
  if (!user) {
    return next(new AppError("User not found", 404));
  }

  await user.update({ active: "ban" });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined! Please use /signup instead",
  });
};
exports.createAddress = catchAsync(async (req, res) => {
  const user = await User.findByPk(req.user.id);
  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  // Get current address array (parse JSON if needed)
  let addressArray = user.address || [];
  if (typeof addressArray === 'string') {
    addressArray = JSON.parse(addressArray);
  }
  if (!Array.isArray(addressArray)) {
    addressArray = [];
  }

  const newAddress = {
    name: req.body.name,
    phone: req.body.phone,
    province: req.body.province,
    district: req.body.district,
    ward: req.body.ward,
    detail: req.body.detail,
    setDefault: addressArray.length === 0 ? true : false
  };

  addressArray.push(newAddress);

  // Update user with new address array
  await user.update({ address: addressArray });

  // Reload user to get updated data
  await user.reload();

  res.status(200).json({
    status: "success",
    message: "You have already added address successfully.",
    data: {
      user: user
    },
  });
});
exports.updateAddress = catchAsync(async (req, res) => {
  const user = await User.findByPk(req.user.id);
  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  const id = req.body.id;
  let addressArray = user.address || [];
  if (typeof addressArray === 'string') {
    addressArray = JSON.parse(addressArray);
  }
  if (!Array.isArray(addressArray)) {
    addressArray = [];
  }

  if (addressArray.length > id) {
    const updatedAddress = {
      name: req.body.name,
      phone: req.body.phone,
      province: req.body.province,
      district: req.body.district,
      ward: req.body.ward,
      detail: req.body.detail,
      setDefault: req.body.setDefault || false,
    };
    addressArray[id] = updatedAddress;
    
    await user.update({ address: addressArray });
    await user.reload();

    return res.status(200).json({
      status: "success",
      message: "You have already updated address successfully.",
      data: {
        user: user
      }
    });
  }
  
  return res.status(500).json({
    status: "error",
    message: "This data is not exist. Please try again!!!",
  });
});
exports.deleteAddress = catchAsync(async (req, res) => {
  const user = await User.findByPk(req.user.id);
  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  let addressArray = user.address || [];
  if (typeof addressArray === 'string') {
    addressArray = JSON.parse(addressArray);
  }
  if (!Array.isArray(addressArray)) {
    addressArray = [];
  }

  const index = req.body.id;
  if (addressArray.length > index) {
    const check = addressArray[index].setDefault;
    addressArray.splice(index, 1);
    if (check === true && addressArray.length > 0) {
      addressArray[0].setDefault = true;
    }
    
    await user.update({ address: addressArray });
    await user.reload();

    return res.status(200).json({
      status: "success",
      message: "Delete address successfully.",
      data: {
        user: user
      },
    });
  }
  
  return res.status(500).json({
    status: "error",
    message: "This data is not exist. Please try again!!!",
  });
});
exports.setDefaultAddress = catchAsync(async (req, res) => {
  const user = await User.findByPk(req.user.id);
  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  let addressArray = user.address || [];
  if (typeof addressArray === 'string') {
    addressArray = JSON.parse(addressArray);
  }
  if (!Array.isArray(addressArray)) {
    addressArray = [];
  }

  const index = req.body.id;
  if (addressArray.length > index) {
    const current = addressArray.findIndex(
      (value) => value.setDefault === true
    );
    if (current !== -1) {
      addressArray[current].setDefault = false;
    }
    addressArray[index].setDefault = true;
    
    await user.update({ address: addressArray });
    await user.reload();

    return res.status(200).json({
      status: "success",
      message: "Set default address successfully.",
      data: {
        user: user
      },
    });
  }
  
  return res.status(500).json({
    status: "error",
    message: "This data is not exist. Please try again!!!",
  });
});
exports.getUserAddress = catchAsync(async (req, res) => {
  const user = await User.findByPk(req.user.id);
  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  let address = user.address || [];
  if (typeof address === 'string') {
    address = JSON.parse(address);
  }
  if (!Array.isArray(address)) {
    address = [];
  }

  res.status(200).json({
    status: "success",
    data: {
      address,
    },
    message: "Get all user address successfully.",
  });
});
exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);

// Do NOT update passwords with this!
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
exports.getTableUser = factory.getTable(User);
