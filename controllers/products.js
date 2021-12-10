const Product=require("../models/product");

//const products=[];
const path=require('path');

exports.getAddProduct=(req,res,next)=>{
    const product= new Product(req.body.title);
    console.log(req.body.title);
    product.save();
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
 };

exports.postAddProduct=(req,res, next)=>{
   
    res.redirect('/');
};

exports.getProducts=(req,res,next)=>{
    const products=Product.fetchAll()
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
};