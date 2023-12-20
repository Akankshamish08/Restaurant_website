const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require ("body-parser");
const usersRoutes = require("./../NodeJS/usersRoutes")
const cors = require("cors");
const app = express();
app.use(cors());
//built in middlewares
app.use(bodyParser.json());
//application in middlewares
// app.use(loggedInUserRequest);
mongoose.connect("mongodb+srv://akanksha:akanksha123@cluster0.tmbxm3v.mongodb.net/");
const db = mongoose.connection;

db.on("error",()=>{
    console.log("connection not successful ");
});

db.on("open",()=>{
    console.log("connection is successful");
});
app.listen("4567",()=> {
    console.log("server is running on port 4567");
});
//route level middleware
app.get("/",loggedInUserRequest,(req,res)=>{
    res.send("learning nodejs");
});

function loggedInUserRequest(req,res,next){
    console.log("user has initiated request");
    next ();
}

require ("./../NodeJS/restaurantRoutes")(app);
usersRoutes(app);