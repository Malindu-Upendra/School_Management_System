const express = require('express');
const UserModel = require('../model/User')
const jwt = require("jsonwebtoken");
const router = express.Router();

const secret = 'test';

router.post('/login',async (req, res) => {
    const d = req.body;
    const user = new UserModel(d)

    const username = user.username;
    const password = user.password;

    try {
        const oldUser = await UserModel.findOne({ username });

        if (!oldUser) return res.send({ message: "User doesn't exist" ,success:false});

        if(password !== oldUser.password) {
            return res.send({message: "Invalid Password",success:false});
        }
        const token = jwt.sign({ position: oldUser.role,name:oldUser.name, username: oldUser.username }, secret, { expiresIn: "1h" });

        res.status(200).json({token , success:true});
    } catch (err) {
        res.status(500).json({ message: "Something went wrong",success:false });
    }

});

router.post('/insert',async (req,res) => {

    const body = req.body;
    try {
        const user = new UserModel(body);
        const result = await user.save()
        res.send({data:result,success:true})
    }catch (e) {
        console.log(e)
    }
})

module.exports = router;