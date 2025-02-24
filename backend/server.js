require("dotenv").config()
const express = require('express');
const connectToDB = require("./config/db")
const authRoutes = require("./routes/auth")
const cookieParser = require("cookie-parser")
const app = express()



app.use(express.json())
app.use("/app",authRoutes)
app.use(cookieParser())
connectToDB(process.env.MONGODB_URI);


app.listen(process.env.PORT,()=>console.log("Server started at Port:"+process.env.PORT))