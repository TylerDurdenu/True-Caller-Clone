const express = require('express');
const authorise = require("../middlewares/auth")
const PhoneNumberLookup = require("../controller/features")
const router = express.Router()

router.get("/search",authorise,PhoneNumberLookup);

module.exports = router;