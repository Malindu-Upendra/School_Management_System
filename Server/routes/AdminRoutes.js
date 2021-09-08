const express = require('express');
const User = require('../model/User')
const Student = require('../model/Student.js')
const Teacher = require('../model/Teacher.js')
const Grade1 = require('../model/Grade_1')
const Grade2 = require('../model/Grade_2')
const Grade3 = require('../model/Grade_3')
const Grade4 = require('../model/Grade_4')
const Grade5 = require('../model/Grade_5')
const Grade6 = require('../model/Grade_6')
const Grade7 = require('../model/Grade_7')
const Grade8 = require('../model/Grade_8')
const Grade9 = require('../model/Grade_9')

const router = express.Router();

router.post('/test',async (req,res) => {

    const data = req.body;

    try{
        const gradeInsert = new Grade1(data);
        const result = await gradeInsert.save()
        res.send({data:result,success:true});
    }catch (e) {
        console.log(e)
    }

})

router.post('/addStudent',async (req,res) => {

    const body = req.body;

    try {
        if(body.grade === 1){
            const student = new Student(body);
            const result = await student.save();
            const user = new User({username:result.administrationNum,name:result.name,password:result.password,role:result.role})
            await user.save();
            const gradeInsert = new Grade1({RegistrationNumber:body.administrationNum,name:body.name,ObjectIDOfUser:result._id});
            await gradeInsert.save();
        }else if(body.grade === 2){
            const student = new Student(body);
            const result = await student.save();
            const user = new User({username:result.administrationNum,name:result.name,password:result.password,role:result.role})
            await user.save();
            const gradeInsert = new Grade2({RegistrationNumber:body.administrationNum,name:body.name,ObjectIDOfUser:result._id});
            await gradeInsert.save();
        }else if(body.grade === 3){
            const student = new Student(body);
            const result = await student.save();
            const user = new User({username:result.administrationNum,name:result.name,password:result.password,role:result.role})
            await user.save();
            const gradeInsert = new Grade3({RegistrationNumber:body.administrationNum,name:body.name,ObjectIDOfUser:result._id});
            await gradeInsert.save();
        }else if(body.grade === 4){
            const student = new Student(body);
            const result = await student.save();
            const user = new User({username:result.administrationNum,name:result.name,password:result.password,role:result.role})
            await user.save();
            const gradeInsert = new Grade4({RegistrationNumber:body.administrationNum,name:body.name,ObjectIDOfUser:result._id});
            await gradeInsert.save();
        }else if(body.grade === 5) {
            const student = new Student(body);
            const result = await student.save();
            const user = new User({username:result.administrationNum,name:result.name,password:result.password,role:result.role})
            await user.save();
            const gradeInsert = new Grade5({RegistrationNumber:body.administrationNum,name:body.name,ObjectIDOfUser:result._id});
            await gradeInsert.save();
        } else if(body.grade === 6){
            const student = new Student(body);
            const result = await student.save();
            const user = new User({username:result.administrationNum,name:result.name,password:result.password,role:result.role})
            await user.save();
            const gradeInsert = new Grade6({RegistrationNumber:body.administrationNum,name:body.name,ObjectIDOfUser:result._id});
            await gradeInsert.save();
        }else if(body.grade === 7){
            const student = new Student(body);
            const result = await student.save();
            const user = new User({username:result.administrationNum,name:result.name,password:result.password,role:result.role})
            await user.save();
            const gradeInsert = new Grade7({RegistrationNumber:body.administrationNum,name:body.name,ObjectIDOfUser:result._id});
            await gradeInsert.save();
        }else if(body.grade === 8){
            const student = new Student(body);
            const result = await student.save();
            const user = new User({username:result.administrationNum,name:result.name,password:result.password,role:result.role})
            await user.save();
            const gradeInsert = new Grade8({RegistrationNumber:body.administrationNum,name:body.name,ObjectIDOfUser:result._id});
            await gradeInsert.save();
        }else if(body.grade === 9){
            const student = new Student(body);
            const result = await student.save();
            const user = new User({username:result.administrationNum,name:result.name,password:result.password,role:result.role})
            await user.save();
            const gradeInsert = new Grade9({RegistrationNumber:body.administrationNum,name:body.name,ObjectIDOfUser:result._id});
            await gradeInsert.save();
        }
        //else if(body.grade === 10){
        //     console.log(body.grade);
        // }else if(body.grade === 11){
        //     console.log(body.grade);
        // }else if(body.grade === 12){
        //     console.log(body.grade);
        // }else if(body.grade === 13){
        //     console.log(body.grade);
        // }

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

router.delete('/deleteStudent/:id', (req,res) =>{

    const id = req.params.id;
    console.log(id);
    try {
        Student.findByIdAndDelete({_id:id}).exec();
        res.send({success: true})
    }catch (e) {
        res.send({success: false})
    }
})

router.get('/getGeneratedId',async (req,res) => {

    try{
    const student = await Student.findOne().limit(1).sort({$natural:-1})
    const test = student.administrationNum;
    const afterDivided = test.split("");
    let num = parseInt(afterDivided[2] + afterDivided[3] + afterDivided[4] + afterDivided[5] + afterDivided[6]);
    const id = "ST000"+(num + 1);

    res.send({id:id,success:true});
    }catch (e) {
        console.log(e);
    }

})

router.post('/addTeacher',async (req,res) => {

    const tbody = req.body;


    try {
        const teacher = new Teacher(tbody);

        //put result in front of await
        await teacher.save();
        // const user = new User({username:result.administrationNum,name:result.name,password:result.password,role:result.role})
        // await user.save();

        res.send({success:true})
    }catch (e) {
        console.log(e)
    }

})

router.get('/getTeachers',async (req,res) => {

    try {

        const teacher = await Teacher.find()

        res.json(teacher);

    }catch (e) {
        console.log(e)
    }

})

router.get('/getSpecificTeacher/:id', async (req,res) => {

    const id = req.params.id;

    const teachers = await Teacher.findOne({_id:id});

    res.send({data: teachers, success:true});
})

router.delete('/deleteTeacher/:id', async (req,res) => {

    const id = req.params.id;

    try {
        const teachers = await Teacher.findByIdAndDelete({_id:id})

        res.send({success:true})

    }catch (e) {
        console.log(e);
    }
})

module.exports = router;