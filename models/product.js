// const db=require('../util/database');

// const Cart = require('./cart');

// // const p = path.join(
// //   path.dirname(require.main.filename),
// //   'data',
// //   'products.json'
// // );


// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//   return db.execute('INSERT INTO  products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)'
//     ,[this.title, this.price, this.description, this.imageUrl]);
//   }

//   static deleteById(id) {
//    return db.execute('DELETE FROM products WHERE id = ?',[this.id]);
//   }

//   static fetchAll() {
//     return db.execute('SELECT * FROM products');
    
//   }

//   static findById(id) {
//   return db.execute('SELECT * FROM products WHERE id = ?',[this.id]);
  
//   }  
// };





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Sequelize= require('sequelize');
const sequelize=require('../util/database')

const Product=sequelize.define('product',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price:{
    type:Sequelize.DOUBLE,
    allowNull: false,
  },
  imageUrl:{
    type:Sequelize.STRING,
    allowNull: false,
  },
  description:{
    type:Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;
