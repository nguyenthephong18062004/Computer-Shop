const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const sequelize = new Sequelize(
  process.env.DB_NAME || 'tech_ecommerce',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    dialectOptions: {
      // Enable JSON support for MySQL
      typeCast: function (field, next) {
        if (field.type === 'JSON') {
          return JSON.parse(field.string());
        }
        return next();
      }
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// Test connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to MySQL database:', error);
  }
};

module.exports = { sequelize, testConnection };

