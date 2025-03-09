const express = require('express');
const {handleLogin, handleRegistration,handleLogout} = require("../controller/auth")
const router = express.Router()
const checkAuth = require("../middlewares/checkAuth")

router.post("/register",handleRegistration);
router.post("/login",checkAuth,handleLogin);
router.post("/logout",handleLogout)
module.exports = router;