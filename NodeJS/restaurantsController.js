const restaurantModel = require ("./restaurantModel");

exports.create = (req , res)=>{
    const {image , name , cuisines , rating , cost , menuItems } = req.body;
    const newRestaurant = new restaurantModel({
        image ,
         name ,
         cuisines ,
          rating ,
           cost ,
           menuItems
    });
    newRestaurant.save().then(data => {
        if(!data){
            res.status(400).send("something went wrong");
        }
        res.send(data);
    } ).catch(err => res.status(500).json({message:  "server is not available"}))
};
exports.fetch = (req , res) =>{
    restaurantModel.find().then(data => {
        if(!data){
            res.status(404).json({message:"Data not found"})
        }
        res.send (data);
    } ).catch(err => res.status(500).json({message:  "server is not available"}))
};
exports.fetchOne = (req,res) =>{
 const _id = req.params.id;

 restaurantModel
 .find({_id:_id})
 .then((data)=>{
    if(!data){
        res.status(404).json({message:"data not found"})
    }
    res.send(data);
 }).catch((err) => res.status(500).json({message: "server not available"}))
};
exports.updateOne = (req,res) =>{
    const _id = req.params.id;
   
    restaurantModel
    .findByIdAndUpdate(_id, {menuItems  : ""})
    .then((data)=>{
       if(!data){
           res.status(404).json({message:"data not found"})
       }
       res.send(data);
    }).catch((err) => res.status(500).json({message: "server not available"}))
   };
   exports.delete = (req,res) =>{
    const _id = req.params.id;
   
    restaurantModel
    .findByIdAndDelete(_id)
    .then((data)=>{
       if(!data){
           res.status(404).json({message:"Restaurant not found"})
       }
       res.send(data);
    }).catch((err) => res.status(500).json({message: "server not available"}))
   };
