const express =require('express');
const path=require('path');
const router=express.Router();
const rootDir=require('../util/path');

router.get("/",(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));

});

// router.use((req,res,next)=>{
//     res.status(404).sendFile(path.join(rootDir,'views','404.html'));
//     console.log(404);
// });

module.exports = router;
