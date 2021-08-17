const express = require('express');
const Student = require('../model/Student.js')

const router = express.Router();

router.post('/addStudent',async (req,res) => {

    const body = req.body;
    console.log(body);

    try {
        const s = new Student(body);

        await s.save();
        res.send({success:true})
    }catch (e) {
        console.log(e)
    }

})

module.exports = router;