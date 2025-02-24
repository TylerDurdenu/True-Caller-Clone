const mongoose = require('mongoose');

const spamReportSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"users",
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    }
})

const SpamReport = mongoose.model("SpamReport",spamReportSchema)
module.exports = SpamReport