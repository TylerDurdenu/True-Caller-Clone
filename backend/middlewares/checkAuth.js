const jsonwebtoken = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET;
function checkAuth(req, res, next) {
    const token = req.cookies.jwt;

    if(!token) {
        return next();
    }
    try {
        const decoded = jsonwebtoken.verify(token,SECRET_KEY);
        if(decoded) {
            return res.status(201).json("Already logged in")
        }
        return next();
    }
    catch(err) {
        return next();
    }
}
module.exports = checkAuth;