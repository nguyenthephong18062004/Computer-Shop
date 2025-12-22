const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Transaction = sequelize.define('Transaction', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    },
    validate: {
      notEmpty: {
        msg: 'Không thể để trống người nhận'
      }
    }
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: { args: [1], msg: 'Tiền nhận phải lớn hơn 0' },
      notEmpty: {
        msg: 'Không thể trống mục tiền nhận'
      }
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  payments: {
    type: DataTypes.ENUM('vnpay', 'paypal', 'refund'),
    defaultValue: 'refund',
    validate: {
      isIn: {
        args: [['vnpay', 'paypal', 'refund']],
        msg: 'Phải có phương thức nhận tiền'
      },
      notEmpty: {
        msg: 'Phải có phương thức thanh toán'
      }
    }
  },
  order: {
    type: DataTypes.STRING,
    allowNull: true
  },
  invoicePayment: {
    type: DataTypes.JSON,
    allowNull: true
  }
}, {
  tableName: 'transactions',
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: false,
  hooks: {
    afterCreate: async (transaction) => {
      const User = require('./userModel');
      const { sequelize } = require('../config/database');
      await User.update(
        { balance: sequelize.literal(`balance + ${transaction.amount}`) },
        { where: { id: transaction.userId } }
      );
    }
  }
});

module.exports = Transaction;
