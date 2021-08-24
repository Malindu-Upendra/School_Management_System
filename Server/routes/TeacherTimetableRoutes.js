const express = require('express');
const Classroom = require('../model/ClassroomTimetable.js')

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
module.exports= router;
