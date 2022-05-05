const express = require("express");
const Handlebars = require("handlebars");
var db = require('./modules/dbconfig');
const engine = require("express-handlebars").engine;
const signupRoute =require('./routes/signupRoute')
const passport = require('./config/passport')
const session =  require('express-session')

const app = express();
const port =3002;

app.use(
    session({
        secret : "azerty",
        resave: true,
        saveUninitialized:false

    })
)

app.use(passport.initialize())
app.use(passport.session())
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.use(express.urlencoded({extended:false}))
app.use('/' , signupRoute)




    

app.listen(port , ()=>{
    console.log(`le ${port} est en marche`);
})






// const signupRoute = ('./routes/signupRoute.js');