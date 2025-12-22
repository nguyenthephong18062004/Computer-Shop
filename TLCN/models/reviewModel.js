const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Review = sequelize.define('Review', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  review: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Đánh giá không thể để trống!'
      }
    }
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: { args: [1], msg: 'Rating phải từ 1' },
      max: { args: [5], msg: 'Rating tối đa 5' }
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
        msg: 'Vui lòng cung cấp sản phẩm đánh giá.'
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
        msg: 'Đánh giá phải từ một người dùng nào đó'
      }
    }
  }
}, {
  tableName: 'reviews',
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updateAt',
  indexes: [
    {
      unique: true,
      fields: ['productId', 'userId']
    }
  ]
});

// Static method to calculate average ratings
Review.calcAverageRatings = async function(productId) {
  const { sequelize } = require('../config/database');
  const Product = require('./productModel');
  
  const stats = await Review.findAll({
    where: { productId },
    attributes: [
      [sequelize.fn('COUNT', sequelize.col('Review.id')), 'nRating'],
      [sequelize.fn('AVG', sequelize.col('Review.rating')), 'avgRating'],
      [sequelize.literal(`SUM(CASE WHEN Review.rating = 5 THEN 1 ELSE 0 END)`), 'fiveRating'],
      [sequelize.literal(`SUM(CASE WHEN Review.rating = 4 THEN 1 ELSE 0 END)`), 'fourRating'],
      [sequelize.literal(`SUM(CASE WHEN Review.rating = 3 THEN 1 ELSE 0 END)`), 'threeRating'],
      [sequelize.literal(`SUM(CASE WHEN Review.rating = 2 THEN 1 ELSE 0 END)`), 'twoRating'],
      [sequelize.literal(`SUM(CASE WHEN Review.rating = 1 THEN 1 ELSE 0 END)`), 'oneRating']
    ],
    raw: true
  });

  const statsData = stats[0];

  if (statsData && statsData.nRating > 0) {
    const ratingsQuantity = parseInt(statsData.nRating);
    const ratingsAverage = parseFloat(statsData.avgRating || 4.5);
    const eachRating = [
      parseInt(statsData.oneRating || 0),
      parseInt(statsData.twoRating || 0),
      parseInt(statsData.threeRating || 0),
      parseInt(statsData.fourRating || 0),
      parseInt(statsData.fiveRating || 0)
    ];

    await Product.update({
      ratingsQuantity,
      ratingsAverage,
      eachRating
    }, {
      where: { id: productId }
    });
  } else {
    await Product.update({
      ratingsQuantity: 0,
      ratingsAverage: 4.5,
      eachRating: [0, 0, 0, 0, 0],
      review: []
    }, {
      where: { id: productId }
    });
  }
};

module.exports = Review;
