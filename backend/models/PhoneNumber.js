const mongoose = require('mongoose');

const phoneNumberSchema = new mongoose.Schema({
    names:[
        {
            type:String,
            required:true
        }
    ],
    number:{
        type:String,
        unique:true,
        required:true
    },
    spamScore:{
        type:Number,
        default:0
    }
}, {timestamps:true})

const PhoneNumber = mongoose.model("PhoneNumber", phoneNumberSchema);

module.exports = PhoneNumber;