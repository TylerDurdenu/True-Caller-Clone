const mongoose = require('mongoose');

const phoneNumberSchema = new mongoose.Schema({
    names:[
        {
            type:String,
            required:true
        }
    ],
    countryCode:{
        type:String,
        required:true
    },
    number:{
        type:String,
        unique:true,
        required:true
    },
    spamScore:{
        type:Number,
        default:0
    },
    
    countryName:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    carrier:{
        type:String,
        required:true
    }

}, {timestamps:true})

const PhoneNumber = mongoose.model("PhoneNumber", phoneNumberSchema);

module.exports = PhoneNumber;