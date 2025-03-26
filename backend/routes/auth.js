const router = require('express').Router();
const User = require('../models/user');
const List = require('../models/list');
const bcrypt = require('bcryptjs');
const { validateSignin, validateSignup } = require('../middlewares/inputValidate');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

//signup

router.post('/signup', validateSignup, async (req, res) => {
    try {

        const { email, username, password } = req.body
        //first check if already exists
        console.log(email)
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" })
        }
        const hashPassword = bcrypt.hashSync(password)
        const user = new User({ email, username, password: hashPassword })
        await user.save()
        //generate jwt token
        const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: '1h' })
        res.status(201).json({
            message: "user created successfully",
            token,
            user: {
                email: user.email,
                username: user.username,
                _id: user._id
            }
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "server error during signup",error })
    }
})
//signIN
router.post('/signin', validateSignin, async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })
        if (!user) {
            return res.status(400).json({ message: "Please Signup first" })
        }
        //verify password
        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Password" })
        }
        //generate JWT token
        const token = jwt.sign(
            { email: user.email },
            secretKey,
            { expiresIn: '1h' } // Token expires in 1 hour
        );
        const { password, ...others } = user._doc
        res.status(200).json({message:"Login successful",token, user:others })
    } catch (error) {
        res.status(500).json({ message: "server error during login" })
    }
})
module.exports = router;