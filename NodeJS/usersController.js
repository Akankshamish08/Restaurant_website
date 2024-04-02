const usersModel= require("./userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.register = (req,res)=>{
    const{FullName,Email, Password}= req.body;

    const newUser = new usersModel ({
        FullName , Email , 
        Password: bcrypt.hashSync(Password,10),
    });
  usersModel.findOne({Email}).then(data=>{
    if(data){
       return res.status(400).json({message:"User Already Registered"});

    }else {
        newUser.save().then((data) =>{
            return res.status(200).json({message:"User Registered Successfully"});
        });
    }
  }).catch(err=>{
    return res.status(500).send({message:"Server not found"})
  });

};
exports.login=(req,res)=>{
    const {Email,Password}=req.body;
    usersModel.findOne({Email}).then(data =>{
        if(!data){
        return res.status(404).json({message:"user is not register"});
    }
       let isValidPassword= bcrypt.compareSync(Password,data.Password)

       if(!isValidPassword){
        return res.status(401).send("Invaild Password.Please Enter Correct Password")
       }

       let accessToken = jwt.sign({id: data._id},"secretkey", {expiresIn: "1h",});
        
       res.send({
        user: {
            FullName : data.FullName,
            Email:data.Email,
        },
        token: accessToken,
       });


    }).catch(err => res.status(500).send("Server not Available"));
};
