const mongoose = require("mongoose");
const {Schema} = mongoose;


const userSchema = new Schema({
   
    name:{
        type:String,
        required:[true,"please provide a valid username"]
    },

    phoneNumber:{
        type:String,
        required:[true,"please provide your contact number"]
    },
    email:{
        type:String,
        required:[true,"please provide your email"],
        unique:true
    },

    password:{
        type:String,
        required:[true,"password can not be empty  "],
        unique:true,
        minlength:6
    }
});


var User = mongoose.model("user",userSchema);
module.exports = User;

