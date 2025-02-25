const express = require('express');
const authorise = require("../middlewares/auth")
const {PhoneNumberLookup,reportSpam, updateName} = require("../controller/features")
const router = express.Router()

router.get("/search",authorise,PhoneNumberLookup);
router.post("/report",authorise,reportSpam);
router.post("/updateName",authorise, updateName);

module.exports = router;