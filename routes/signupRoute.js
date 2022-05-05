const mongoose = require("mongoose");
const signUpModels = require("../modules/signupModules");
const modelsSIgn= require("../modules/signupModules")
const router = require("express").Router();


router.get("/signup" ,(req,res,next)=>{


    res.render('signup')
})

router.post("/signup",(req,res,next)=>{
       const body = req.body;
       const newSign = signUpModels(body)
       newSign.save().then( (sign) =>{
        //    res.json(sign)
           res.redirect('/signup/admin')
        //    console.log(sign);
    })
})
router.get("/signup/admin",(req,res,next)=>{
       const body = req.body;
       res.render( "admin",{
         
            username: req.body.username,
            age:req.body.age
       })
       console.log(req.body.username);
})

module.exports = router;