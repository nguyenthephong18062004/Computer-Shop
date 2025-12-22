const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Import = sequelize.define('Import', {
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
        msg: 'Hóa đơn nhập hàng phải từ admin hoặc nhân viên'
      }
    }
  },
  invoice: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: []
  },
  totalPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'imports',
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: false
});

module.exports = Import;
