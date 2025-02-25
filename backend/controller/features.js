const PhoneNumber = require("../models/PhoneNumber")

async function PhoneNumberLookup(req,res){
    try {
        const phone = req.query.phone;
        const user = await PhoneNumber.findOne({number:phone});
        if(!user) {
            return res.status(400).json("No users found");
        }
        return res.status(200).json(user);
    }
    catch(err) {
        console.log(err.message)
        return res.status(500).json("Internal server error");
    }
}
module.exports = PhoneNumberLookup;