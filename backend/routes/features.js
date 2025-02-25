const express = require('express');
const authorise = require("../middlewares/auth")
const {PhoneNumberLookup,reportSpam} = require("../controller/features")
const router = express.Router()

router.get("/search",authorise,PhoneNumberLookup);
router.post("/report",authorise,reportSpam);


module.exports = router;