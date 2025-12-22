-- Tạo database
CREATE DATABASE IF NOT EXISTS tech_ecommerce CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Sử dụng database
USE tech_ecommerce;

-- Bảng users
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  avatar VARCHAR(500) DEFAULT 'https://png.pngtree.com/png-clipart/20200701/original/pngtree-default-avatar-png-image_5407175.jpg',
  role ENUM('user', 'employee', 'admin') DEFAULT 'user',
  password VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  address JSON DEFAULT NULL,
  passwordChangedAt DATETIME DEFAULT NULL,
  passwordResetToken VARCHAR(255) DEFAULT NULL,
  passwordResetExpires DATETIME DEFAULT NULL,
  userVerifyToken VARCHAR(255) DEFAULT NULL,
  active ENUM('active', 'verify', 'ban') DEFAULT 'verify',
  dateOfBirth VARCHAR(255) DEFAULT NULL,
  gender VARCHAR(255) DEFAULT NULL,
  phone VARCHAR(255) DEFAULT NULL,
  balance DECIMAL(10, 2) DEFAULT 0,
  INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng categories
CREATE TABLE IF NOT EXISTS categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(40) NOT NULL UNIQUE,
  slug VARCHAR(255) DEFAULT NULL,
  INDEX idx_name (name),
  INDEX idx_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng brands
CREATE TABLE IF NOT EXISTS brands (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(40) NOT NULL UNIQUE,
  INDEX idx_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng products
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL UNIQUE,
  price DECIMAL(10, 2) NOT NULL,
  promotion DECIMAL(10, 2) DEFAULT NULL,
  description TEXT DEFAULT NULL,
  ratingsAverage DECIMAL(3, 1) DEFAULT 4.5,
  ratingsQuantity INT DEFAULT 0,
  eachRating JSON DEFAULT NULL,
  images JSON DEFAULT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  createdBy INT DEFAULT NULL,
  inventory INT DEFAULT 0,
  color VARCHAR(255) DEFAULT NULL,
  cpu VARCHAR(255) DEFAULT NULL,
  ram VARCHAR(255) DEFAULT NULL,
  os VARCHAR(255) DEFAULT NULL,
  weight DECIMAL(5, 2) DEFAULT NULL,
  screen VARCHAR(255) DEFAULT NULL,
  graphicCard VARCHAR(255) DEFAULT NULL,
  battery VARCHAR(255) DEFAULT NULL,
  demand VARCHAR(255) DEFAULT NULL,
  updatedAt DATETIME DEFAULT NULL,
  updatedBy INT DEFAULT NULL,
  brandId INT DEFAULT NULL,
  categoryId INT DEFAULT NULL,
  review JSON DEFAULT NULL,
  FOREIGN KEY (createdBy) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (updatedBy) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (brandId) REFERENCES brands(id) ON DELETE SET NULL,
  FOREIGN KEY (categoryId) REFERENCES categories(id) ON DELETE SET NULL,
  INDEX idx_title (title),
  INDEX idx_price (price),
  INDEX idx_category (categoryId),
  INDEX idx_brand (brandId),
  INDEX idx_createdBy (createdBy)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng reviews
CREATE TABLE IF NOT EXISTS reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  review TEXT NOT NULL,
  rating INT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  productId INT NOT NULL,
  updateAt DATETIME DEFAULT NULL,
  userId INT NOT NULL,
  FOREIGN KEY (productId) REFERENCES products(id) ON DELETE CASCADE,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE KEY unique_user_product (productId, userId),
  INDEX idx_product (productId),
  INDEX idx_user (userId),
  INDEX idx_rating (rating)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng comments
CREATE TABLE IF NOT EXISTS comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  comment TEXT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  productId INT NOT NULL,
  updateAt DATETIME DEFAULT NULL,
  userId INT NOT NULL,
  parentId INT DEFAULT NULL,
  `like` JSON DEFAULT NULL,
  FOREIGN KEY (productId) REFERENCES products(id) ON DELETE CASCADE,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (parentId) REFERENCES comments(id) ON DELETE CASCADE,
  INDEX idx_product (productId),
  INDEX idx_user (userId),
  INDEX idx_parent (parentId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng orders
CREATE TABLE IF NOT EXISTS orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  address VARCHAR(255) NOT NULL,
  receiver VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  cart JSON NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  totalPrice DECIMAL(10, 2) NOT NULL,
  payments ENUM('tiền mặt', 'paypal', 'vnpay', 'số dư') NOT NULL,
  status ENUM('Cancelled', 'Processed', 'Waiting Goods', 'Delivery', 'Success') DEFAULT 'Processed',
  invoicePayment JSON DEFAULT NULL,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user (userId),
  INDEX idx_status (status),
  INDEX idx_createdAt (createdAt)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng imports
CREATE TABLE IF NOT EXISTS imports (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  invoice JSON NOT NULL,
  totalPrice DECIMAL(10, 2) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user (userId),
  INDEX idx_createdAt (createdAt)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng transactions
CREATE TABLE IF NOT EXISTS transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  payments ENUM('vnpay', 'paypal', 'refund') DEFAULT 'refund',
  `order` VARCHAR(255) DEFAULT NULL,
  invoicePayment JSON DEFAULT NULL,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user (userId),
  INDEX idx_createdAt (createdAt)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bảng locations
CREATE TABLE IF NOT EXISTS locations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) DEFAULT NULL,
  address VARCHAR(255) NOT NULL,
  location GEOMETRY DEFAULT NULL,
  INDEX idx_address (address)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

