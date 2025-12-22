const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Order = sequelize.define('Order', {
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
        msg: 'Hóa đơn phải có người mua'
      }
    }
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Hóa đơn mua hàng phải có địa chỉ vận chuyển'
      }
    }
  },
  receiver: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Hóa đơn mua hàng phải có thông tin người nhận'
      }
    }
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Hóa đơn mua hàng phải có số điện thoại người nhận'
      }
    }
  },
  cart: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: []
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  totalPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  payments: {
    type: DataTypes.ENUM('tiền mặt', 'paypal', 'vnpay', 'số dư'),
    allowNull: false,
    validate: {
      isIn: {
        args: [['tiền mặt', 'paypal', 'vnpay', 'số dư']],
        msg: 'Phương thức thanh toán là tiền mặt hoặc ngân hàng'
      },
      notEmpty: {
        msg: 'Phải có phương thức thanh toán'
      }
    }
  },
  status: {
    type: DataTypes.ENUM('Cancelled', 'Processed', 'Waiting Goods', 'Delivery', 'Success'),
    defaultValue: 'Processed'
  },
  invoicePayment: {
    type: DataTypes.JSON,
    allowNull: true
  }
}, {
  tableName: 'orders',
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: false,
  hooks: {
    afterCreate: async (order) => {
      const User = require('./userModel');
      const { sequelize } = require('../config/database');
      if (order.payments === 'số dư') {
        await User.update(
          { balance: sequelize.literal(`balance - ${order.totalPrice}`) },
          { where: { id: order.userId } }
        );
      }
    },
    afterUpdate: async (order) => {
      const Transaction = require('./transactionModel');
      // Check if status changed to Cancelled
      if (order.changed('status') && order.payments !== 'tiền mặt' && order.status === 'Cancelled') {
        await Transaction.create({
          userId: order.userId,
          amount: order.totalPrice,
          payments: 'refund',
          order: order.id.toString()
        });
      }
    }
  }
});

module.exports = Order;
