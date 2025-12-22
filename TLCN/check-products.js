const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const { sequelize } = require('./config/database');
const Product = require('./models/productModel');
const Category = require('./models/categoryModel');
const Brand = require('./models/brandModel');
const User = require('./models/userModel');

async function checkProducts() {
  try {
    await sequelize.authenticate();
    console.log('✓ Database connected');
    
    const productCount = await Product.count();
    console.log(`\nTotal products in database: ${productCount}`);
    
    if (productCount === 0) {
      console.log('\n⚠️  No products found in database!');
      console.log('Creating sample products...\n');
      
      // Check if we have categories and brands
      const categoryCount = await Category.count();
      const brandCount = await Brand.count();
      const userCount = await User.count();
      
      console.log(`Categories: ${categoryCount}`);
      console.log(`Brands: ${brandCount}`);
      console.log(`Users: ${userCount}`);
      
      // Create sample data if needed
      let category, brand, user;
      
      if (categoryCount === 0) {
        category = await Category.create({ name: 'Laptop', slug: 'laptop' });
        console.log('✓ Created category: Laptop');
      } else {
        category = await Category.findOne();
      }
      
      if (brandCount === 0) {
        brand = await Brand.create({ name: 'Dell' });
        console.log('✓ Created brand: Dell');
      } else {
        brand = await Brand.findOne();
      }
      
      if (userCount === 0) {
        user = await User.create({
          name: 'Admin',
          email: 'admin@example.com',
          password: '12345678',
          role: 'admin',
          active: 'active'
        });
        console.log('✓ Created admin user');
      } else {
        user = await User.findOne();
      }
      
      // Create sample products
      const sampleProducts = [
        {
          title: 'Laptop Dell XPS 13',
          price: 25000000,
          promotion: 22000000,
          description: 'Laptop cao cấp với màn hình 13 inch, CPU Intel Core i7',
          inventory: 10,
          categoryId: category.id,
          brandId: brand.id,
          createdBy: user.id,
          images: JSON.stringify(['https://via.placeholder.com/400x300?text=Laptop+Dell+XPS+13']),
          cpu: 'Intel Core i7-1165G7',
          ram: '16GB DDR4',
          os: 'Windows 11',
          screen: '13.4 inch FHD',
          color: 'Bạc'
        },
        {
          title: 'Laptop HP Pavilion 15',
          price: 18000000,
          promotion: 16000000,
          description: 'Laptop phổ thông với màn hình 15 inch, phù hợp cho công việc văn phòng',
          inventory: 15,
          categoryId: category.id,
          brandId: brand.id,
          createdBy: user.id,
          images: JSON.stringify(['https://via.placeholder.com/400x300?text=Laptop+HP+Pavilion+15']),
          cpu: 'Intel Core i5-1135G7',
          ram: '8GB DDR4',
          os: 'Windows 11',
          screen: '15.6 inch FHD',
          color: 'Đen'
        },
        {
          title: 'Laptop Asus ZenBook 14',
          price: 22000000,
          promotion: 20000000,
          description: 'Laptop siêu mỏng nhẹ, thiết kế sang trọng',
          inventory: 8,
          categoryId: category.id,
          brandId: brand.id,
          createdBy: user.id,
          images: JSON.stringify(['https://via.placeholder.com/400x300?text=Laptop+Asus+ZenBook+14']),
          cpu: 'AMD Ryzen 7 5800U',
          ram: '16GB DDR4',
          os: 'Windows 11',
          screen: '14 inch FHD',
          color: 'Xanh dương'
        }
      ];
      
      for (const productData of sampleProducts) {
        await Product.create(productData);
        console.log(`✓ Created product: ${productData.title}`);
      }
      
      console.log('\n✅ Sample products created successfully!');
    } else {
      const products = await Product.findAll({ 
        limit: 3,
        include: [
          { model: Category, as: 'category', attributes: ['name'] },
          { model: Brand, as: 'brand', attributes: ['name'] }
        ]
      });
      
      console.log('\nSample products:');
      products.forEach((p, i) => {
        console.log(`${i + 1}. ${p.title} - ${p.price} VND`);
      });
    }
    
    await sequelize.close();
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

checkProducts();

