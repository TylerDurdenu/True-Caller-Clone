const express = require('express');
const {handleLogin, handleRegistration} = require("../controller/auth")
const router = express.Router()
const checkAuth = require("../middlewares/checkAuth")

router.post("/register",handleRegistration);
router.post("/login",checkAuth,handleLogin)
module.exports = router;