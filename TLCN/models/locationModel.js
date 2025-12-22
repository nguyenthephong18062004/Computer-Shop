const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Location = sequelize.define('Location', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Không thể trống địa chỉ'
      }
    }
  },
  location: {
    type: DataTypes.GEOMETRY('POINT'),
    allowNull: true
  }
}, {
  tableName: 'locations',
  timestamps: false
});

module.exports = Location;
