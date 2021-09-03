const express = require('express');
const UserModel = require('../model/User')
const jwt = require("jsonwebtoken");
const router = express.Router();

const secret = 'test';

router.post('/login',async (req, res) => {
    const d = req.body;
    const user = new UserModel(d)

    console.log("from routes 1 " + user);
    const username = user.username;
    const password = user.password;

    try {
        const oldUser = await UserModel.findOne({ username });

        if (!oldUser) return res.send({ message: "User doesn't exist" ,success:false});

        if(password !== oldUser.password) {
            console.log("from routes 3 Invalid credentials")
            return res.send({message: "Invalid credentials",success:false});
        }
        const token = jwt.sign({ position: oldUser.role, id: oldUser._id }, secret, { expiresIn: "1h" });

        res.status(200).json({token , success:true});
    } catch (err) {
        res.status(500).json({ message: "Something went wrong",success:false });
    }

});

module.exports = router;