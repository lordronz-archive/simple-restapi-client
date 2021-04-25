const userRouter = require('express').Router();
const User = require('../models/userSchema');

userRouter.use((req, res, next) => {
    next();
});

userRouter.get('/getall', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

userRouter.get('/getuser/:username', async (req, res) => {
    const user = await User.find({ username: req.params.username });
    res.json(user);
});

module.exports = userRouter;
