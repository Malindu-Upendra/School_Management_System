const express = require('express');
const Student = require('../model/Student.js')

const router = express.Router();

router.post('/addStudent',async (req,res) => {

    const body = req.body;

    try {
        const student = new Student(body);

        await student.save();
        res.send({success:true})
    }catch (e) {
        console.log(e)
    }

})

router.get('/getStudents',async (req,res) => {

    try {
        const students = await Student.find();

        res.send({data:students,success:true})
    }catch (e) {
        console.log(e)
    }

})

router.post('/test',(req,res) => {

    const test = 'ST00001';
    const afterDivided = test.split("");
    const num = parseInt(afterDivided[2]+afterDivided[3]+afterDivided[4]+afterDivided[5]+afterDivided[6]);
    console.log(num);
})

module.exports = router;