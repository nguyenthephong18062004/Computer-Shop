-- Insert sample data for tech_ecommerce database
USE tech_ecommerce;

-- Insert sample category if not exists
INSERT IGNORE INTO categories (name, slug) VALUES ('Laptop', 'laptop');
INSERT IGNORE INTO categories (name, slug) VALUES ('Desktop', 'desktop');
INSERT IGNORE INTO categories (name, slug) VALUES ('Accessories', 'accessories');

-- Insert sample brand if not exists
INSERT IGNORE INTO brands (name) VALUES ('Dell');
INSERT IGNORE INTO brands (name) VALUES ('HP');
INSERT IGNORE INTO brands (name) VALUES ('Asus');
INSERT IGNORE INTO brands (name) VALUES ('Lenovo');
INSERT IGNORE INTO brands (name) VALUES ('Acer');

-- Get IDs for foreign keys
SET @category_id = (SELECT id FROM categories WHERE name = 'Laptop' LIMIT 1);
SET @brand_dell_id = (SELECT id FROM brands WHERE name = 'Dell' LIMIT 1);
SET @brand_hp_id = (SELECT id FROM brands WHERE name = 'HP' LIMIT 1);
SET @brand_asus_id = (SELECT id FROM brands WHERE name = 'Asus' LIMIT 1);
-- Use first available user, or set to NULL if no users exist
SET @user_id = (SELECT id FROM users LIMIT 1);

-- Insert sample products
INSERT INTO products (
    title, price, promotion, description, inventory, 
    categoryId, brandId, createdBy, images, 
    cpu, ram, os, screen, color, ratingsAverage, ratingsQuantity
) VALUES 
(
    'Laptop Dell XPS 13',
    25000000,
    22000000,
    'Laptop cao cấp với màn hình 13 inch, CPU Intel Core i7, RAM 16GB, phù hợp cho công việc và giải trí',
    10,
    @category_id,
    @brand_dell_id,
    @user_id,
    JSON_ARRAY('https://via.placeholder.com/400x300?text=Laptop+Dell+XPS+13'),
    'Intel Core i7-1165G7',
    '16GB DDR4',
    'Windows 11',
    '13.4 inch FHD',
    'Bạc',
    4.5,
    0
),
(
    'Laptop HP Pavilion 15',
    18000000,
    16000000,
    'Laptop phổ thông với màn hình 15 inch, CPU Intel Core i5, RAM 8GB, phù hợp cho công việc văn phòng',
    15,
    @category_id,
    @brand_hp_id,
    @user_id,
    JSON_ARRAY('https://via.placeholder.com/400x300?text=Laptop+HP+Pavilion+15'),
    'Intel Core i5-1135G7',
    '8GB DDR4',
    'Windows 11',
    '15.6 inch FHD',
    'Đen',
    4.3,
    0
),
(
    'Laptop Asus ZenBook 14',
    22000000,
    20000000,
    'Laptop siêu mỏng nhẹ, thiết kế sang trọng, CPU AMD Ryzen 7, RAM 16GB',
    8,
    @category_id,
    @brand_asus_id,
    @user_id,
    JSON_ARRAY('https://via.placeholder.com/400x300?text=Laptop+Asus+ZenBook+14'),
    'AMD Ryzen 7 5800U',
    '16GB DDR4',
    'Windows 11',
    '14 inch FHD',
    'Xanh dương',
    4.7,
    0
),
(
    'Laptop Dell Inspiron 15',
    15000000,
    13500000,
    'Laptop giá rẻ, phù hợp cho học sinh sinh viên, CPU Intel Core i3, RAM 4GB',
    20,
    @category_id,
    @brand_dell_id,
    @user_id,
    JSON_ARRAY('https://via.placeholder.com/400x300?text=Laptop+Dell+Inspiron+15'),
    'Intel Core i3-1115G4',
    '4GB DDR4',
    'Windows 11',
    '15.6 inch HD',
    'Bạc',
    4.0,
    0
),
(
    'Laptop HP EliteBook 840',
    28000000,
    25000000,
    'Laptop doanh nhân cao cấp, bền bỉ, CPU Intel Core i7, RAM 16GB, SSD 512GB',
    5,
    @category_id,
    @brand_hp_id,
    @user_id,
    JSON_ARRAY('https://via.placeholder.com/400x300?text=Laptop+HP+EliteBook+840'),
    'Intel Core i7-1185G7',
    '16GB DDR4',
    'Windows 11 Pro',
    '14 inch FHD',
    'Xám',
    4.8,
    0
);

-- Verify inserted data
SELECT COUNT(*) as total_products FROM products;
SELECT id, title, price, promotion, inventory FROM products;

