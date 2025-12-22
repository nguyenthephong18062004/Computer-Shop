const crypto = require('crypto');
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Vui lòng cung cấp tên!'
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: 'Vui lòng cung cấp mail chính xác'
      },
      notEmpty: {
        msg: 'Vui lòng cung cấp email'
      }
    },
    set(value) {
      this.setDataValue('email', value.toLowerCase());
    }
  },
  avatar: {
    type: DataTypes.STRING,
    defaultValue: 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-default-avatar-png-image_5407175.jpg'
  },
  role: {
    type: DataTypes.ENUM('user', 'employee', 'admin'),
    defaultValue: 'user'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8, Infinity],
        msg: 'Mật khẩu tối thiểu 8 ký tự'
      },
      notEmpty: {
        msg: 'Tài khoản cần có mật khẩu'
      }
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  address: {
    type: DataTypes.JSON,
    defaultValue: []
  },
  passwordChangedAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  passwordResetToken: {
    type: DataTypes.STRING,
    allowNull: true
  },
  passwordResetExpires: {
    type: DataTypes.DATE,
    allowNull: true
  },
  userVerifyToken: {
    type: DataTypes.STRING,
    allowNull: true
  },
  active: {
    type: DataTypes.ENUM('active', 'verify', 'ban'),
    defaultValue: 'verify'
  },
  dateOfBirth: {
    type: DataTypes.STRING,
    allowNull: true
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  balance: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0
  }
}, {
  tableName: 'users',
  timestamps: true,
  updatedAt: false,
  hooks: {
    beforeCreate: async (user) => {
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 12);
      }
    },
    beforeUpdate: async (user) => {
      if (user.changed('password') && !user.isNewRecord) {
        user.password = await bcrypt.hash(user.password, 12);
        user.passwordChangedAt = new Date(Date.now() - 1000);
      }
    }
  }
});

// Instance methods
User.prototype.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

User.prototype.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      new Date(this.passwordChangedAt).getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

User.prototype.createPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(3).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

User.prototype.createVerifyToken = function() {
  const verifyToken = crypto.randomBytes(3).toString('hex');
  this.userVerifyToken = crypto
    .createHash('sha256')
    .update(verifyToken)
    .digest('hex');
  return verifyToken;
};

module.exports = User;
