const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const domPurifier = require('dompurify');
const { JSDOM } = require('jsdom');
const htmlPurify = domPurifier(new JSDOM().window);

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(200),
    allowNull: false,
    unique: true,
    validate: {
      len: {
        args: [10, 200],
        msg: 'Tên sản phẩm từ 10 đến 200 kí tự'
      },
      notEmpty: {
        msg: 'Sản phẩm phải có tên phân biệt'
      }
    }
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Vui lòng cung cấp giá sản phẩm'
      },
      min: {
        args: [0],
        msg: 'Giá sản phẩm phải lớn hơn 0'
      }
    }
  },
  promotion: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    validate: {
      isValidPromotion(value) {
        if (value && this.price && parseFloat(value) >= parseFloat(this.price)) {
          throw new Error('Giá giảm phải nhỏ hơn giá gốc');
        }
      }
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  ratingsAverage: {
    type: DataTypes.DECIMAL(3, 1),
    defaultValue: 4.5,
    validate: {
      min: { args: [1], msg: 'Đánh giá từ 1 sao trở lên' },
      max: { args: [5], msg: 'Đánh giá tối đa 5 sao' }
    },
    set(value) {
      if (value) {
        this.setDataValue('ratingsAverage', Math.round(value * 10) / 10);
      }
    }
  },
  ratingsQuantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  eachRating: {
    type: DataTypes.JSON,
    defaultValue: [0, 0, 0, 0, 0]
  },
  images: {
    type: DataTypes.JSON,
    defaultValue: []
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  inventory: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cpu: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ram: {
    type: DataTypes.STRING,
    allowNull: true
  },
  os: {
    type: DataTypes.STRING,
    allowNull: true
  },
  weight: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true
  },
  screen: {
    type: DataTypes.STRING,
    allowNull: true
  },
  graphicCard: {
    type: DataTypes.STRING,
    allowNull: true
  },
  battery: {
    type: DataTypes.STRING,
    allowNull: true
  },
  demand: {
    type: DataTypes.STRING,
    allowNull: true
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updatedBy: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  brandId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'brands',
      key: 'id'
    }
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'categories',
      key: 'id'
    }
  },
  review: {
    type: DataTypes.JSON,
    defaultValue: []
  }
}, {
  tableName: 'products',
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  hooks: {
    beforeCreate: (product) => {
      if (product.description) {
        product.description = htmlPurify.sanitize(product.description);
      }
    },
    beforeUpdate: (product) => {
      if (product.changed('description')) {
        product.description = htmlPurify.sanitize(product.description);
      }
    }
  }
});

// Virtual field for percent
Product.prototype.getPercent = function() {
  if (!this.promotion || !this.price) return 0;
  return Math.round(((parseFloat(this.price) - parseFloat(this.promotion)) * 100) / parseFloat(this.price));
};

module.exports = Product;
