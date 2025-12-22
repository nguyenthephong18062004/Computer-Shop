const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const slugify = require('slugify');

const Category = sequelize.define('Category', {
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
        msg: 'Thể loại sản phẩm phải có tên'
      },
      len: {
        args: [2, 40],
        msg: 'Thể loại sản phẩm từ 2 đến 40 kí tự'
      }
    }
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'categories',
  timestamps: false,
  hooks: {
    beforeCreate: (category) => {
      if (category.name) {
        category.slug = slugify(category.name, { lower: true });
      }
    },
    beforeUpdate: (category) => {
      if (category.changed('name')) {
        category.slug = slugify(category.name, { lower: true });
      }
    }
  }
});

module.exports = Category;
