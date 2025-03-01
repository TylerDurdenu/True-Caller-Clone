require("dotenv").config()
const express = require('express');
const connectToDB = require("./config/db")
const featureRoutes = require("./routes/features")
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require('helmet');
const app = express()
const cors = require('cors');
const authRoutes = require("./routes/auth")

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(morgan("dev"))
app.use(helmet())
app.use("/app",authRoutes)
app.use("/app/feature",featureRoutes);
connectToDB(process.env.MONGODB_URI);


app.listen(process.env.PORT,()=>console.log("Server started at Port:"+process.env.PORT))