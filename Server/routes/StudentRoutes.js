const express = require('express');
const router = express.Router();
const cloudinary = require('../utils/cloudinary.js');
const upload = require('../utils/multer.js');
const Event = require('../model/Event');
const Attendance = require('../model/Attendance')
const Student = require('../model/Student')
const Grade1 = require('../model/Grade_1')
const Grade2 = require('../model/Grade_2')
const Grade3 = require('../model/Grade_3')
const Grade4 = require('../model/Grade_4')
const Grade5 = require('../model/Grade_5')
const Grade6 = require('../model/Grade_6')
const Grade7 = require('../model/Grade_7')
const Grade8 = require('../model/Grade_8')
const Grade9 = require('../model/Grade_9')
const SubjectNotice = require('../model/SubjectNotice.js')
const SubjectMaterial = require('../model/SubjectMaterials')
const Classroom = require("../model/ClassroomTimetable");
const Exam = require('../model/ExamTimetable.js')

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
    const currentD = date.getDate()+ "/" +(date.getMonth()+1)+ "/" +date.getFullYear()

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

router.get('/getGrades/:username/:grade', async (req,res) => {

    let data;
    try {

        const username = req.params.username;
        const grade = req.params.grade;

        let result = ''
        const terms = [{term: '1'}, {term: '2'}, {term: '3'}]
        let studentGrades = []

        let response = []

        if (grade === '1') {
            result = await Grade1.findOne({RegistrationNumber: username})

            data = {
                term: '1',
                grades: [{subject: 'Sinhala',result: result.term1.Sinhala},
                    {subject: 'Mathematics',result: result.term1.Mathematics},
                    {subject: 'Environment',result: result.term1.Environment},
                    {subject: 'English',result: result.term1.English},
                    {subject: 'Buddhism',result: result.term1.Buddhism}]
            }

            studentGrades.push(data)
            data = []

            data = {
                term: '2',
                grades: [{subject: 'Sinhala',result: result.term2.Sinhala},
                    {subject: 'Mathematics',result: result.term2.Mathematics},
                    {subject: 'Environment',result: result.term2.Environment},
                    {subject: 'English',result: result.term2.English},
                    {subject: 'Buddhism',result: result.term2.Buddhism}]
            }

            studentGrades.push(data)
            data = []

            data = {
                term: '3',
                grades: [{subject: 'Sinhala',result: result.term3.Sinhala},
                    {subject: 'Mathematics',result: result.term3.Mathematics},
                    {subject: 'Environment',result: result.term3.Environment},
                    {subject: 'English',result: result.term3.English},
                    {subject: 'Buddhism',result: result.term3.Buddhism}]
            }

            studentGrades.push(data)

        }else  if(grade === '2'){
             result = await Grade2.findOne({RegistrationNumber:username})

            data = {
                term: '1',
                grades: [{subject: 'Sinhala',result: result.term1.Sinhala},
                    {subject: 'Mathematics',result: result.term1.Mathematics},
                    {subject: 'Environment',result: result.term1.Environment},
                    {subject: 'English',result: result.term1.English},
                    {subject: 'Buddhism',result: result.term1.Buddhism}]
            }

            studentGrades.push(data)
            data = []

            data = {
                term: '2',
                grades: [{subject: 'Sinhala',result: result.term2.Sinhala},
                    {subject: 'Mathematics',result: result.term2.Mathematics},
                    {subject: 'Environment',result: result.term2.Environment},
                    {subject: 'English',result: result.term2.English},
                    {subject: 'Buddhism',result: result.term2.Buddhism}]
            }

            studentGrades.push(data)
            data = []

            data = {
                term: '3',
                grades: [{subject: 'Sinhala',result: result.term3.Sinhala},
                    {subject: 'Mathematics',result: result.term3.Mathematics},
                    {subject: 'Environment',result: result.term3.Environment},
                    {subject: 'English',result: result.term3.English},
                    {subject: 'Buddhism',result: result.term3.Buddhism}]
            }

            studentGrades.push(data)
        }else if(grade === '3'){
             result = await Grade3.findOne({RegistrationNumber:username})

            data = {
                term: '1',
                grades: [{subject: 'Sinhala',result: result.term1.Sinhala},
                    {subject: 'Mathematics',result: result.term1.Mathematics},
                    {subject: 'Environment',result: result.term1.Environment},
                    {subject: 'English',result: result.term1.English},
                    {subject: 'Buddhism',result: result.term1.Buddhism}]
            }

            studentGrades.push(data)
            data = []

            data = {
                term: '2',
                grades: [{subject: 'Sinhala',result: result.term2.Sinhala},
                    {subject: 'Mathematics',result: result.term2.Mathematics},
                    {subject: 'Environment',result: result.term2.Environment},
                    {subject: 'English',result: result.term2.English},
                    {subject: 'Buddhism',result: result.term2.Buddhism}]
            }

            studentGrades.push(data)
            data = []

            data = {
                term: '3',
                grades: [{subject: 'Sinhala',result: result.term3.Sinhala},
                    {subject: 'Mathematics',result: result.term3.Mathematics},
                    {subject: 'Environment',result: result.term3.Environment},
                    {subject: 'English',result: result.term3.English},
                    {subject: 'Buddhism',result: result.term3.Buddhism}]
            }

            studentGrades.push(data)
        }else if(grade === '4'){
             result = await Grade4.findOne({RegistrationNumber:username})

            data = {
                term: '1',
                grades: [{subject: 'Sinhala',result: result.term1.Sinhala},
                    {subject: 'Mathematics',result: result.term1.Mathematics},
                    {subject: 'Environment',result: result.term1.Environment},
                    {subject: 'English',result: result.term1.English},
                    {subject: 'Buddhism',result: result.term1.Buddhism}]
            }

            studentGrades.push(data)
            data = []

            data = {
                term: '2',
                grades: [{subject: 'Sinhala',result: result.term2.Sinhala},
                    {subject: 'Mathematics',result: result.term2.Mathematics},
                    {subject: 'Environment',result: result.term2.Environment},
                    {subject: 'English',result: result.term2.English},
                    {subject: 'Buddhism',result: result.term2.Buddhism}]
            }

            studentGrades.push(data)
            data = []

            data = {
                term: '3',
                grades: [{subject: 'Sinhala',result: result.term3.Sinhala},
                    {subject: 'Mathematics',result: result.term3.Mathematics},
                    {subject: 'Environment',result: result.term3.Environment},
                    {subject: 'English',result: result.term3.English},
                    {subject: 'Buddhism',result: result.term3.Buddhism}]
            }

            studentGrades.push(data)
        }else if(grade === '5'){
             result = await Grade5.findOne({RegistrationNumber:username})

            data = {
                term: '1',
                grades: [{subject: 'Sinhala',result: result.term1.Sinhala},
                    {subject: 'Mathematics',result: result.term1.Mathematics},
                    {subject: 'Environment',result: result.term1.Environment},
                    {subject: 'English',result: result.term1.English},
                    {subject: 'Buddhism',result: result.term1.Buddhism}]
            }

            studentGrades.push(data)
            data = []

            data = {
                term: '2',
                grades: [{subject: 'Sinhala',result: result.term2.Sinhala},
                    {subject: 'Mathematics',result: result.term2.Mathematics},
                    {subject: 'Environment',result: result.term2.Environment},
                    {subject: 'English',result: result.term2.English},
                    {subject: 'Buddhism',result: result.term2.Buddhism}]
            }

            studentGrades.push(data)
            data = []

            data = {
                term: '3',
                grades: [{subject: 'Sinhala',result: result.term3.Sinhala},
                    {subject: 'Mathematics',result: result.term3.Mathematics},
                    {subject: 'Environment',result: result.term3.Environment},
                    {subject: 'English',result: result.term3.English},
                    {subject: 'Buddhism',result: result.term3.Buddhism}]
            }

            studentGrades.push(data)
        }else if(grade === '6'){
             result = await Grade6.findOne({RegistrationNumber:username})

            data = {
                term: '1',
                grades: [{subject: 'Sinhala',result: result.term1.Sinhala},
                    {subject: 'Mathematics',result: result.term1.Mathematics},
                    {subject: 'Science',result: result.term1.Science},
                    {subject: 'HealthStudies',result: result.term1.HealthStudies},
                    {subject: 'English',result: result.term1.English},
                    {subject: 'Buddhism',result: result.term1.Buddhism},
                    {subject: 'History',result: result.term1.History},
                    {subject: 'Geography',result: result.term1.Geography},
                    {subject: 'Civics',result: result.term1.Civics},
                    {subject: 'Art',result: result.term1.Art},
                    {subject: 'Tamil',result: result.term1.Tamil},
                    {subject: 'Islam',result: result.term1.Islam}]
            }

            studentGrades.push(data)
            data = []

            data = {
                term: '2',
                grades: [{subject: 'Sinhala',result: result.term2.Sinhala},
                    {subject: 'Mathematics',result: result.term2.Mathematics},
                    {subject: 'Science',result: result.term2.Science},
                    {subject: 'HealthStudies',result: result.term2.HealthStudies},
                    {subject: 'English',result: result.term2.English},
                    {subject: 'Buddhism',result: result.term2.Buddhism},
                    {subject: 'History',result: result.term2.History},
                    {subject: 'Geography',result: result.term2.Geography},
                    {subject: 'Civics',result: result.term2.Civics},
                    {subject: 'Art',result: result.term2.Art},
                    {subject: 'Tamil',result: result.term2.Tamil},
                    {subject: 'Islam',result: result.term2.Islam}]
            }

            studentGrades.push(data)
            data = []

            data = {
                term: '3',
                grades: [{subject: 'Sinhala',result: result.term3.Sinhala},
                    {subject: 'Mathematics',result: result.term3.Mathematics},
                    {subject: 'Science',result: result.term3.Science},
                    {subject: 'HealthStudies',result: result.term3.HealthStudies},
                    {subject: 'English',result: result.term3.English},
                    {subject: 'Buddhism',result: result.term3.Buddhism},
                    {subject: 'History',result: result.term3.History},
                    {subject: 'Geography',result: result.term3.Geography},
                    {subject: 'Civics',result: result.term3.Civics},
                    {subject: 'Art',result: result.term3.Art},
                    {subject: 'Tamil',result: result.term3.Tamil},
                    {subject: 'Islam',result: result.term3.Islam}]
            }

            studentGrades.push(data)
        }else if(grade === '7'){
             result = await Grade7.findOne({RegistrationNumber:username})

            data = {
                term: '1',
                grades: [{subject: 'Sinhala',result: result.term1.Sinhala},
                    {subject: 'Mathematics',result: result.term1.Mathematics},
                    {subject: 'Science',result: result.term1.Science},
                    {subject: 'HealthStudies',result: result.term1.HealthStudies},
                    {subject: 'English',result: result.term1.English},
                    {subject: 'Buddhism',result: result.term1.Buddhism},
                    {subject: 'History',result: result.term1.History},
                    {subject: 'Geography',result: result.term1.Geography},
                    {subject: 'Civics',result: result.term1.Civics},
                    {subject: 'Art',result: result.term1.Art},
                    {subject: 'Tamil',result: result.term1.Tamil},
                    {subject: 'Islam',result: result.term1.Islam}]
            }

            studentGrades.push(data)
            data = []

            data = {
                term: '2',
                grades: [{subject: 'Sinhala',result: result.term2.Sinhala},
                    {subject: 'Mathematics',result: result.term2.Mathematics},
                    {subject: 'Science',result: result.term2.Science},
                    {subject: 'HealthStudies',result: result.term2.HealthStudies},
                    {subject: 'English',result: result.term2.English},
                    {subject: 'Buddhism',result: result.term2.Buddhism},
                    {subject: 'History',result: result.term2.History},
                    {subject: 'Geography',result: result.term2.Geography},
                    {subject: 'Civics',result: result.term2.Civics},
                    {subject: 'Art',result: result.term2.Art},
                    {subject: 'Tamil',result: result.term2.Tamil},
                    {subject: 'Islam',result: result.term2.Islam}]
            }

            studentGrades.push(data)
            data = []

            data = {
                term: '3',
                grades: [{subject: 'Sinhala',result: result.term3.Sinhala},
                    {subject: 'Mathematics',result: result.term3.Mathematics},
                    {subject: 'Science',result: result.term3.Science},
                    {subject: 'HealthStudies',result: result.term3.HealthStudies},
                    {subject: 'English',result: result.term3.English},
                    {subject: 'Buddhism',result: result.term3.Buddhism},
                    {subject: 'History',result: result.term3.History},
                    {subject: 'Geography',result: result.term3.Geography},
                    {subject: 'Civics',result: result.term3.Civics},
                    {subject: 'Art',result: result.term3.Art},
                    {subject: 'Tamil',result: result.term3.Tamil},
                    {subject: 'Islam',result: result.term3.Islam}]
            }

            studentGrades.push(data)
        }else if(grade === '8'){
             result = await Grade8.findOne({RegistrationNumber:username})

            data = {
                term: '1',
                grades: [{subject: 'Sinhala',result: result.term1.Sinhala},
                    {subject: 'Mathematics',result: result.term1.Mathematics},
                    {subject: 'Science',result: result.term1.Science},
                    {subject: 'HealthStudies',result: result.term1.HealthStudies},
                    {subject: 'English',result: result.term1.English},
                    {subject: 'Buddhism',result: result.term1.Buddhism},
                    {subject: 'History',result: result.term1.History},
                    {subject: 'Geography',result: result.term1.Geography},
                    {subject: 'Civics',result: result.term1.Civics},
                    {subject: 'Art',result: result.term1.Art},
                    {subject: 'Tamil',result: result.term1.Tamil},
                    {subject: 'Islam',result: result.term1.Islam}]
            }

            studentGrades.push(data)
            data = []

            data = {
                term: '2',
                grades: [{subject: 'Sinhala',result: result.term2.Sinhala},
                    {subject: 'Mathematics',result: result.term2.Mathematics},
                    {subject: 'Science',result: result.term2.Science},
                    {subject: 'HealthStudies',result: result.term2.HealthStudies},
                    {subject: 'English',result: result.term2.English},
                    {subject: 'Buddhism',result: result.term2.Buddhism},
                    {subject: 'History',result: result.term2.History},
                    {subject: 'Geography',result: result.term2.Geography},
                    {subject: 'Civics',result: result.term2.Civics},
                    {subject: 'Art',result: result.term2.Art},
                    {subject: 'Tamil',result: result.term2.Tamil},
                    {subject: 'Islam',result: result.term2.Islam}]
            }

            studentGrades.push(data)
            data = []

            data = {
                term: '3',
                grades: [{subject: 'Sinhala',result: result.term3.Sinhala},
                    {subject: 'Mathematics',result: result.term3.Mathematics},
                    {subject: 'Science',result: result.term3.Science},
                    {subject: 'HealthStudies',result: result.term3.HealthStudies},
                    {subject: 'English',result: result.term3.English},
                    {subject: 'Buddhism',result: result.term3.Buddhism},
                    {subject: 'History',result: result.term3.History},
                    {subject: 'Geography',result: result.term3.Geography},
                    {subject: 'Civics',result: result.term3.Civics},
                    {subject: 'Art',result: result.term3.Art},
                    {subject: 'Tamil',result: result.term3.Tamil},
                    {subject: 'Islam',result: result.term3.Islam}]
            }

            studentGrades.push(data)
        }else if(grade === '9'){
             result = await Grade9.findOne({RegistrationNumber:username})

            data = {
                term: '1',
                grades: [{subject: 'Sinhala',result: result.term1.Sinhala},
                    {subject: 'Mathematics',result: result.term1.Mathematics},
                    {subject: 'Science',result: result.term1.Science},
                    {subject: 'HealthStudies',result: result.term1.HealthStudies},
                    {subject: 'English',result: result.term1.English},
                    {subject: 'Buddhism',result: result.term1.Buddhism},
                    {subject: 'History',result: result.term1.History},
                    {subject: 'Geography',result: result.term1.Geography},
                    {subject: 'Civics',result: result.term1.Civics},
                    {subject: 'Art',result: result.term1.Art},
                    {subject: 'Tamil',result: result.term1.Tamil},
                    {subject: 'Islam',result: result.term1.Islam}]
            }

            studentGrades.push(data)
            data = []

            data = {
                term: '2',
                grades: [{subject: 'Sinhala',result: result.term2.Sinhala},
                    {subject: 'Mathematics',result: result.term2.Mathematics},
                    {subject: 'Science',result: result.term2.Science},
                    {subject: 'HealthStudies',result: result.term2.HealthStudies},
                    {subject: 'English',result: result.term2.English},
                    {subject: 'Buddhism',result: result.term2.Buddhism},
                    {subject: 'History',result: result.term2.History},
                    {subject: 'Geography',result: result.term2.Geography},
                    {subject: 'Civics',result: result.term2.Civics},
                    {subject: 'Art',result: result.term2.Art},
                    {subject: 'Tamil',result: result.term2.Tamil},
                    {subject: 'Islam',result: result.term2.Islam}]
            }

            studentGrades.push(data)
            data = []

            data = {
                term: '3',
                grades: [{subject: 'Sinhala',result: result.term3.Sinhala},
                    {subject: 'Mathematics',result: result.term3.Mathematics},
                    {subject: 'Science',result: result.term3.Science},
                    {subject: 'HealthStudies',result: result.term3.HealthStudies},
                    {subject: 'English',result: result.term3.English},
                    {subject: 'Buddhism',result: result.term3.Buddhism},
                    {subject: 'History',result: result.term3.History},
                    {subject: 'Geography',result: result.term3.Geography},
                    {subject: 'Civics',result: result.term3.Civics},
                    {subject: 'Art',result: result.term3.Art},
                    {subject: 'Tamil',result: result.term3.Tamil},
                    {subject: 'Islam',result: result.term3.Islam}]
            }

            studentGrades.push(data)
        }

        res.send({data: studentGrades, success: true})
    } catch (e) {
        console.log(e)
    }

})

router.get('/getSubjects/:username', async (req,res) => {

    try{
        let subjects = [];
        const username = req.params.username;

        const result = await Student.findOne({administrationNum:username})

        const grade = result.grade;

        if(grade === '1' || grade === '2' || grade === '3' || grade === '4' || grade === '5'){
            subjects.push('Sinhala');
            subjects.push('Mathematics')
            subjects.push('Environment')
            subjects.push('English')
            subjects.push('Buddhism')
        }else if(grade === '6' || grade === '7' || grade === '8' || grade === '9'){
            subjects.push('Sinhala');
            subjects.push('Mathematics');
            subjects.push('Science');
            subjects.push('HealthStudies');
            subjects.push('English');
            subjects.push('Buddhism');
            subjects.push('History');
            subjects.push('Geography');
            subjects.push('Civics');
            subjects.push('Art');
            subjects.push('Tamil');
            subjects.push('Islam');
        }

        res.send({data:subjects,grade:grade,success:true})
    }catch (e) {
        console.log(e)
    }

})

router.get('/getSubjectMaterials/:subject/:grade',async (req,res) => {
    const subject = req.params.subject;
    const g = parseInt(req.params.grade);

    try {
        const subjectMaterials = await SubjectMaterial.find({subjectChoose:subject,grade:g});
        res.send({data:subjectMaterials,success:true})
    }catch (e) {
        console.log(e)
    }
})

router.get('/getSubjectNotices/:subject/:grade',async (req,res) => {
    const subject = req.params.subject;
    const grade = req.params.grade;
    try {
        const subjectNotices = await SubjectNotice.find({subjectSelect:subject,grade:grade});
        res.send({data:subjectNotices,success:true})
    }catch (e) {
        console.log(e)
    }
})

router.get('/getSpecificClassRoomTimeTable/:grade',async (req,res)=>{
    try{
        const grade = req.params.grade;

        const timetable = await Classroom.find({grade:grade});
        res.json({timetable});
    }catch (e){
        console.log(e)
    }

})

router.get('/getSpecificExamTimetable/:grade',async (req,res)=>{
    try{
        const grade = req.params.grade;

        const timetable = await Exam.find({grade:grade});
        res.json({timetable});
    }catch (e){
        console.log(e)
    }

})

module.exports = router;
