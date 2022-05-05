const mongoose =require("mongoose");


const signupSchema =  mongoose.Schema({
   "email" :({ type:String,
               require:true

   }),
   "password" : ({
       type : String,
       min : 1,
       max: 9,
       require:true
   }),
   "username" : String,
      "age" :Date,

})

const signupModels = mongoose.model("signup" , signupSchema)

module.exports= signupModels