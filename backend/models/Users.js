const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:"String"
    },
    phone:{
        type:"String",
        unique:true,
        required:true
    },
    isVerified:{
        type:Boolean,
        default:false
    }
}, {timestamps:true});

const User = mongoose.model("Users",userSchema)

module.exports = User;