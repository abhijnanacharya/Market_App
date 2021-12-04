const express=require('express');
const router= express.Router();

router.get("/add-product",(req,res,next)=>{
    res.send(`<form action="/product" method ="POST"><input type="text" name="title">
    <select name="size" id="size" >
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="8">8</option>
        <option value="10">10</option>
    </select>
        <button type="submit">Add Product</button></form>`);
});

router.post('/product',(req,res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

router.use((req,res,next)=>{
    res.status(404).send(`INTERNETZ BROKEN: YOU SUCK!`)
});

module.exports = router;