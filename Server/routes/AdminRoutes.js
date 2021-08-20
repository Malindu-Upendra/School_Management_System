const express = require('express');
const Student = require('../model/Student.js')
const Teacher = require('../model/Teacher.js')

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

router.post('/addTeacher',async (req,res) => {

    const tbody = req.body;

    try {
        const teacher = new Teacher(tbody);

        await teacher.save();
        res.send({success:true})
    }catch (e) {
        console.log(e)
    }

})

router.get('/getTeachers',async (req,res) => {

    try {
        const teachers = await Teacher.find();

        res.send({data:teachers,success:true})
    }catch (e) {
        console.log(e)
    }

})

module.exports = router;