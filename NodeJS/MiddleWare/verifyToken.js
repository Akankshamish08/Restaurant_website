const jwt = require("jsonwebtoken");
const usersModel = require("../userModel");
const verifyToken = (req,res,next) =>{
    if(req.headers
    && req.headers.authorization && req.headers.authorization.split(" ")[0] === "JWT")
    {
        // console.log("this is error from json token upper "+ req.headers.authorization);
       jwt.verify(req.headers.authorization.split(" ")[1],
        "secretkey",
       function(err,verifiedToken){
       if(err){
        
       return  res.status(401).send("Invalid JWT Token ");
       }
       
       usersModel.findById(verifiedToken._id).then((user) => {
        req.user=user;
        next();
       }).catch((err) => res.status(500).send("Server not Available"));
       });
    }else{
        res.status(403).send("Token not present");
    }
};
module.exports = verifyToken;