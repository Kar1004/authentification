const passport = require('passport')
const LocalStrategy = require('passport-local');
const crypto = require('crypto');
const signUpModels = require('../modules/signupModules');
const { disconnect } = require('process');
const { Passport } = require('passport/lib');
const bcrypt = require('bcrypt')




passport.serializeUser((signUpModels, done) => {
  done(null, signUpModels._id)
})

passport.deserializeUser(async (id, done) => {
  const user = await signUpModels.findById(id)
  done(null, user)
})


passport.use(new LocalStrategy((email, password, done) => {

    user.find({email : email },function(err,user){
      if (err)  { return done(err);}
      if(!user) {
        return done(null,false,{ message :"l'utilisateur est incorrect" })
      }
     bcrypt.compare(password , user.password ,function(err,res){
       if (err) {return done(err)}
       if(res === false) {
         return done(null ,res , {message : "le mot de passe"})

       }
     })
      
    })

}))

module.exports = Passport

  