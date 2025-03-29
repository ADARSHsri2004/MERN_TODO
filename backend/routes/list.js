const router = require('express').Router();
const User = require('../models/user');
const List = require('../models/list');
const authJWT = require('../middlewares/authJWT');
router.post('/addTask', authJWT, async (req, res) => {
    try {
        const { title, body } = req.body;

        if (!title || !body) {
            return res.status(400).json({ message: "Please provide all details" })
        }
        const user = await User.findOne({ "email": req.user.email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // ✅ Create a new task and associate it with the user
        const list = new List({ title, body, user: user._id });

        await list.save();

        // ✅ Update user's list reference and save
        user.list.push(list._id);
        await user.save();

        res.status(201).json({ message: "Task added successfully", list });
    } catch (error) {

        res.status(500).json({ message: "server error during adding task" })
    }
})
router.put('/updateTask/:id', authJWT, async (req, res) => {
    try {
        const { title, body, completed } = req.body;
        const user = await User.findOne({ "email": req.user.email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const list = await List.findByIdAndUpdate(req.params.id, { title, body, completed });
        list.save()
        res.status(200).json({ message: "Task updated successfully", list });
    } catch (error) {
        res.status(500).json({ message: "server error during updating task" })
    }
})
router.delete('/deleteTask/:id', authJWT, async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ "email": req.user.email }, { $pull: { list: req.params.id } })
        console.log(user)
        console.log(req.params.id)
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const list = await List.findByIdAndDelete(req.params.id);
        // list.save()
        res.status(200).json({ message: "Task deleted successfully", list });
    } catch (error) {
        res.status(500).json({ message: "server error during deleting task" })
    }
})
router.get('/getTask/:id', authJWT, async (req, res) => {
    try {
        const list = await List.find({ user: req.params.id });
        if (list.length !== 0) {
            res.status(200).json({ list });
        }
        else {
            res.status(404).json({ message: "No task found" });
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "server error during getting task" })
    }
})
module.exports = router;