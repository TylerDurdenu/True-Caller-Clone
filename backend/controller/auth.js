const User = require("../models/Users")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
async function handleRegistration(req, res) {
    try {
        const {name,phone,password} = req.body;

        let user = await User.findOne({phone});
        if(user) {
            return res.status(401).json("User already exits");
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        await User.create({name,phone, password:hashedPassword});
        return res.status(201).json("User Registration Successfull")
    }
    catch(err) {
        return res.status(501).send("Some error occured!.. Please try again later")
    }
}

async function handleLogin(req, res) {
    try {
        const {phone, password} = req.body;
        const user = await User.findOne({phone})
        if(!user) {
            return res.status(404).json("No user exists, Register")
        }
        const result = await bcrypt.compare(password, user.password);
        if(!result) {
            return res.status(401).json("Incorrect password");
        }
        const token = jwt.sign({
            id:user._id
        },process.env.JWT_SECRET,{expiresIn:"1h"});
        console.log(token)
        res.cookie("jwt", token, {
            httpOnly: true,
            secure: false, 
            sameSite: "lax", 
        });
        
        return res.status(201).json("login successfull")
    }
    catch(err) {
        console.log(err.message)
        return res.status(501).send("Some error occured!.. Please try again later")
    }
}


module.exports = {
    handleRegistration,
    handleLogin
};