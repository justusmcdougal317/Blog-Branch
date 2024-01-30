const { Sequelize } = require('sequelize');

const config = {
  development: {
    username: 'root',         // Your MySQL username
    password: 'Armoredtruck7!', // Your MySQL password
    database: 'blog_cms_db',  // Your database name
    host: 'localhost',         // Your database host
    dialect: 'mysql',          // The dialect of the database you are using
  },
 
};

const sequelize = new Sequelize(config.development);

module.exports = sequelize;