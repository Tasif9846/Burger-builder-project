const jwt = require('jsonwebtoken');
module.exports = function (req, res, next) {
    let token = req.header("Authorization");
    if (!token) return res.status(401).send("Access denied, No token provided");
    //Bearer <token>
    try {
        const decoded = jwt.verify(token.split(" ")[1].trim(), process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).send("Invalid Token")
    }
}