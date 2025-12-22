# Hướng dẫn chuyển đổi từ MongoDB sang MySQL

## Cài đặt

1. Cài đặt dependencies mới:
```bash
npm install
```

2. Cấu hình database trong file `config.env`:
```env
DB_NAME=tech_ecommerce
DB_USER=root
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=3306
```

3. Tạo database MySQL:

**Cách 1: Import file SQL (Khuyến nghị)**
```bash
mysql -u root -p < database.sql
```
Hoặc sử dụng MySQL Workbench/phpMyAdmin để import file `database.sql`

**Cách 2: Tạo thủ công**
```sql
CREATE DATABASE tech_ecommerce CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
Sau đó Sequelize sẽ tự động tạo các bảng khi chạy ứng dụng.

4. Chạy ứng dụng - Sequelize sẽ tự động tạo các bảng:
```bash
npm start
```

## Lưu ý quan trọng

- Sequelize sẽ tự động tạo các bảng khi chạy lần đầu (do `sequelize.sync({ alter: true })` trong server.js)
- Tất cả các models đã được chuyển đổi từ Mongoose sang Sequelize
- Các relationships giữa các models được định nghĩa trong `models/index.js`
- File `config.env` cần có các biến môi trường cho MySQL thay vì MongoDB

## Thay đổi chính

1. **Models**: Tất cả models sử dụng Sequelize thay vì Mongoose
2. **Queries**: 
   - `findById()` → `findByPk()`
   - `findOne({ field: value })` → `findOne({ where: { field: value } })`
   - `findByIdAndUpdate()` → `findByPk()` + `update()`
   - `findByIdAndDelete()` → `findByPk()` + `destroy()`
   - `create()` vẫn giống nhau nhưng không cần `passwordConfirm`
3. **Middleware**: Đã bỏ `express-mongo-sanitize`
4. **APIFeatures**: Đã chuyển đổi để hoạt động với Sequelize
5. **Associations**: Sử dụng Sequelize associations thay vì Mongoose populate

## Dữ liệu

- Bạn cần migrate dữ liệu từ MongoDB sang MySQL nếu có dữ liệu cũ
- Hoặc có thể bắt đầu với database trống

