const User = require('./userModel');
const Product = require('./productModel');
const Category = require('./categoryModel');
const Brand = require('./brandModel');
const Review = require('./reviewModel');
const Comment = require('./commentModel');
const Order = require('./orderModel');
const Import = require('./importModel');
const Transaction = require('./transactionModel');
const Location = require('./locationModel');

// User associations
User.hasMany(Product, { foreignKey: 'createdBy', as: 'createdProducts' });
User.hasMany(Product, { foreignKey: 'updatedBy', as: 'updatedProducts' });
User.hasMany(Review, { foreignKey: 'userId', as: 'reviews' });
User.hasMany(Comment, { foreignKey: 'userId', as: 'comments' });
User.hasMany(Order, { foreignKey: 'userId', as: 'orders' });
User.hasMany(Import, { foreignKey: 'userId', as: 'imports' });
User.hasMany(Transaction, { foreignKey: 'userId', as: 'transactions' });

// Product associations
Product.belongsTo(User, { foreignKey: 'createdBy', as: 'createdByUser' });
Product.belongsTo(User, { foreignKey: 'updatedBy', as: 'updatedByUser' });
Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
Product.belongsTo(Brand, { foreignKey: 'brandId', as: 'brand' });
Product.hasMany(Review, { foreignKey: 'productId', as: 'reviews' });
Product.hasMany(Comment, { foreignKey: 'productId', as: 'comments' });

// Category associations
Category.hasMany(Product, { foreignKey: 'categoryId', as: 'products' });

// Brand associations
Brand.hasMany(Product, { foreignKey: 'brandId', as: 'products' });

// Review associations
Review.belongsTo(Product, { foreignKey: 'productId', as: 'product' });
Review.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// Comment associations
Comment.belongsTo(Product, { foreignKey: 'productId', as: 'product' });
Comment.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Comment.belongsTo(Comment, { foreignKey: 'parentId', as: 'parent' });
Comment.hasMany(Comment, { foreignKey: 'parentId', as: 'children' });

// Order associations
Order.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// Import associations
Import.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// Transaction associations
Transaction.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = {
  User,
  Product,
  Category,
  Brand,
  Review,
  Comment,
  Order,
  Import,
  Transaction,
  Location
};

