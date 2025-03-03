const jsonwebtoken = require('jsonwebtoken');
function authorise(req, res,next) {
    console.log()
    try{
        const jwt = req.cookies.jwt;
        if(!jwt){
            return res.status(401).json("Login to use this feature")
        }
        const decoded = jsonwebtoken.verify(jwt,process.env.JWT_SECRET)
        if(!decoded){
            return res.status(401).json("do not tamper with jwt")
        }
        next()

    }
    catch(err) {
        console.log(err.message);
        if (err.name === 'JsonWebTokenError') {
            return res.status(401).json("Invalid token");
        } else if (err.name === 'TokenExpiredError') {
            return res.status(401).json("Token expired");
        } else {
            return res.status(500).json("Internal server error");
        }

    }
}
module.exports = authorise;