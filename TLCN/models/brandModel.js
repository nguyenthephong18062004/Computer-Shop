const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Brand = sequelize.define('Brand', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(40),
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: {
        msg: 'Nhãn hiệu phải có tên'
      },
      len: {
        args: [2, 40],
        msg: 'Nhãn hiệu từ 2 đến 40 kí tự'
      }
    }
  }
}, {
  tableName: 'brands',
  timestamps: false
});

module.exports = Brand;
