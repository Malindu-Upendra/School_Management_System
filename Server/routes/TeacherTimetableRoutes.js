const express = require('express');
const Classroom = require('../model/ClassroomTimetable.js')
const Exam = require('../model/ExamTimetable.js')

const router = express.Router();

router.post('/insertclassroom',async (req,res)=>{
    const ct  = req.body;

    const ctable = new Classroom(ct);

    try{
        await ctable.save();
        res.send({success:'true',message:'Inserted'})

    }catch (e){
        console.log(e);
    }
})

router.get('/allctables',async (req,res)=>{
    try{
        const timetables = await Classroom.find();
        res.json({timetables});
    }catch (e){
        console.log(e)
    }

})

router.delete('/deletecTable/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        await Classroom.findByIdAndRemove(id);
        res.send({success:true,message:"Successfully Deleted"});
    }catch (e){
        console.log(e)
    }

})

//**************************Update for Classroom Time table******************************************************

router.get('/getSpecificRow/:id',async (req,res)=>{
    try{
        const timetables = await Classroom.findOne({_id:req.params.id});
        res.json({timetables,success:true});
    }catch (e){
        console.log(e)
    }

})

router.put('/updateClassroomTimetable',async(req,res)=>{
    const body = req.body;

    try{
        await Classroom.findByIdAndUpdate({_id:body.id},{
            grade:body.grade,
            day:body.day,
            subjectname:body.subjectname,
            title:body.title,
            time:body.time,
            subjectcode:body.subjectcode,
            teacher:body.teacher,
            link:body.link

        })
        res.send({success:true,message:"Successfully Updated"})
    }catch (e) {
        console.log(e)
    }

})

//**************************Crud for Exam Time table******************************************************

router.post('/insertexam',async (req,res)=>{
    const et  = req.body;

    const etable = new Exam (et);

    try{
        await etable.save();
        res.send({success:'true',message:'Inserted'})

    }catch (e){
        console.log(e);
    }
})

module.exports= router;
