const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  FullName: {
    type:String,
    required:true,
},

  Email:{
    type: String,
    required: true,
},

  Password:{
    type: String,
    required: true,
},

});

const usersModel = mongoose.model("users",usersSchema);
module.exports=usersModel;