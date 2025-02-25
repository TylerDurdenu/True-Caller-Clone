const PhoneNumber = require("../models/PhoneNumber")
const SpamReport = require("../models/SpamReport");
const jsonwebtoken = require('jsonwebtoken');

const NUMVERIFY_URL = process.env.NUMVERIFY_URL;
const NUMVERIFY_API_KEY = process.env.NUMVERIFY_API_KEY;
const DEFAULT_COUNTRY_CODE = process.env.DEFAULT_COUNTRY_CODE;

async function PhoneNumberLookup(req,res){
    try {
        const phone = req.query.phone;
        console.log(phone)
        const user = await PhoneNumber.findOne({number:phone});
        if(user) {
            return res.status(200).json(user);
        }
        const response = await fetch(`${NUMVERIFY_URL}${NUMVERIFY_API_KEY}&number=${phone}&country_code=${DEFAULT_COUNTRY_CODE}&format=1`)
        const data = await response.json();
        if(!data.valid){

            return res.status(400).json("Invlaid phone number");
        }
        await PhoneNumber.create({
            names:[],
            countryCode:data.country_code,
            number:phone,
            spamScore:0,
            countryName:data.country_name,
            state:data.location,
            carrier:data.carrier
        })
        return res.status(201).json({
            name:"Not found",
            country:data.country_name,
            state:data.location,
            carrier:data.carrier
        });
    }
    catch(err) {
        console.log(err.message)
        return res.status(500).json("Internal server error");
    }
}

async function reportSpam(req, res) {
    try{
        const {phone,name,reasons} = req.body;
        const jwt = req.cookies.jwt;
        const userId = jsonwebtoken.decode(jwt).id;
        const user = await PhoneNumber.findOne({number:phone});
        if(!user) {
            await PhoneNumber.create({
                names:[name],
                number:phone,
                spamScore:1
            });
        }
        else {
            user.names.push(name);
            user.spamScore+=1;
            await user.save();
        }
        await SpamReport.create({
            user:userId,
            phoneNumber:phone,
            reason:reasons
        })
        return res.status(200).json("Records updated")
    }   
    catch(err) {
        console.log(err.message);
        return res.status(500).json("Internal server error");
    }
}

module.exports = {
    PhoneNumberLookup,
    reportSpam
};