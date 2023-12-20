const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
   image:String,
   name:String ,
   cuisines:Array ,
    rating : String ,
     cost : String ,
     menuItems: Array,
});

const restaurantModel = mongoose.model("restaurants",restaurantSchema);
module.exports=restaurantModel;