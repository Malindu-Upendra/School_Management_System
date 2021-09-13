const express = require('express');
const router = express.Router();
const cloudinary = require('../utils/cloudinary.js');
const upload = require('../utils/multer.js');
const Event = require('../model/Event');
const Attendance = require('../model/Attendance')
const Student = require('../model/Student')

router.post('/addEvent',upload.single("flyer"),async (req,res) => {

    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path,{ public_id: req.file.originalname,resource_type: "raw" });

        let event = new Event({
            eventName: req.body.eventName,
            description: req.body.description,
            venue: req.body.venue,
            link: req.body.link,
            selectedDate: req.body.selectedDate,
            flyer: result.url,
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            userID: req.body.userID,
            cloudinaryID: result.public_id,
        });
        // to Save these
        await event.save();
        res.send({success:true})
    } catch (err) {
        console.log(err);
    }

})

router.get('/getStudentDetails/:username',async (req,res) => {

    const username = req.params.username;

    try{
        const studentDetails = await Student.findOne({administrationNum:username})
        res.send({data:studentDetails,success:true});

    }catch (e) {
        console.log(e)
    }

})

router.post('/markAttendance',async (req,res) => {

    const details = req.body;

    console.log(details)

    try{

        const attendance = new Attendance(details);
        await attendance.save()
        res.send({success:true})
    }catch (e) {
        console.log(e)
    }

})

router.get('/getAttendance/:username',async (req,res) => {

    const username = req.params.username;

    const date = new Date();
    const currentD = date.getMonth()+ "/" +date.getDate()+ "/" +date.getFullYear()

    try{
       const result = await Attendance.findOne({username:username,attendanceDate:currentD});

       if(result !== null) {
           res.send({result: true})
       }else{
           res.send({result: false})
       }
    }catch (e) {
        console.log(e);
    }

})

module.exports = router;