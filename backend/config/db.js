const mongoose = require('mongoose');
async function connectToDB(url) {
    try {
        await mongoose.connect(url,{
            useNewURLParser:true,
            useUnifiedTopology:true
        });
        console.log("Mongo Db connection successfull");
    }
    catch(err) {
        console.log(err.message)
        console.log("Some error occured while connecting to the db")
    }
}
module.exports = connectToDB;