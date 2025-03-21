const router = require('express').Router();
const User = require('../models/user');
const List = require('../models/list');
const bcrypt = require('bcryptjs');

//signup
router.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body
        const hashPassword = bcrypt.hashSync(password)
        const user = new User({ email, username, password: hashPassword })
        await user.save().then(() => {
            res.status(200).json({ user: user })
        })
    } catch (error) {
        res.status(400).json({ message: "user already exists" })
    }
})
//signIN
router.post('/signin', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })
        if (!user) {
            return res.status(400).json({ message: "Please Signup first" })
        }
        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Password" })
        }
        const { password, ...others } = user._doc
        res.status(200).json({ others })
    } catch (error) {
        res.status(400).json({ message: "error" })
    }
})
module.exports = router;