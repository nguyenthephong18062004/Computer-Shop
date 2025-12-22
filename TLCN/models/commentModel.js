const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Bình luận không thể để trống!'
      }
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'products',
      key: 'id'
    },
    validate: {
      notEmpty: {
        msg: 'Vui lòng cung cấp sản phẩm Bình luận.'
      }
    }
  },
  updateAt: {
    type: DataTypes.DATE,
    allowNull: true
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
        msg: 'Bình luận phải từ một người dùng nào đó'
      }
    }
  },
  parentId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'comments',
      key: 'id'
    }
  },
  like: {
    type: DataTypes.JSON,
    defaultValue: []
  }
}, {
  tableName: 'comments',
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updateAt'
});

module.exports = Comment;
