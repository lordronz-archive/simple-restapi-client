const userRouter = require('express').Router();
const mongoose = require('mongoose');
const User = require('../models/userSchema');

mongoose.connect('mongodb://localhost:27017/simplerestapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).catch(e => {
    console.log(e);
});

userRouter.use((req, res, next) => {
    console.log('Hello');
    next();
});

userRouter.get('/getall', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

userRouter.get('/getuser/:username', async (req, res) => {
    const user = await User.find({ username: req.params.username });
    res.send(user);
});

module.exports = userRouter;