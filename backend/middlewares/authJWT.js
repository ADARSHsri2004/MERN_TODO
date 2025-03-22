require('dotenv').config();
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

const authJWT = (req, res, next) => {
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    if (!jwtToken) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decodedValue = jwt.verify(jwtToken, secretKey);
        req.user = decodedValue;
        next();
    } catch (error) {
        res.status(401).json({
            message: "invalid or expired token"
        })
    }

}
module.exports = authJWT;