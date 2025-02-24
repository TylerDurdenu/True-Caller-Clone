require("dotenv").config()
const express = require('express');
const connectToDB = require("./config/db")

const app = express()

connectToDB(process.env.MONGODB_URI);


app.listen(process.env.PORT,()=>console.log("Server started at Port:"+process.env.PORT))