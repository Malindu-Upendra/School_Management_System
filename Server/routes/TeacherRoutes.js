const express = require('express');
const SubjectNotice = require('../model/SubjectNotice.js')
const SubjectMaterial = require('../model/SubjectMaterials')
const cloudinary = require('../utils/cloudinary.js');
const upload = require('../utils/multer.js');
const router = express.Router();
const Teacher = require('../model/Teacher')
const Attendance = require('../model/Attendance')
const Grade1 = require('../model/Grade_1');
const Grade2 = require('../model/Grade_2');
const Grade3 = require('../model/Grade_3');
const Grade4 = require('../model/Grade_4');
const Grade5 = require('../model/Grade_5');
const Grade6 = require('../model/Grade_6');
const Grade7 = require('../model/Grade_7');
const Grade8 = require('../model/Grade_8');
const Grade9 = require('../model/Grade_9');

//***********Crud for Subject Notices**********************************
//----------------------------------insert the subject notices---------------------------------------
router.post('/insertSubjectNotices',async (req,res) => {
    const body = req.body;
    try {
        const subjectNotice = new SubjectNotice(body);
        await subjectNotice.save();
        res.send({success:true})
    }catch (e) {
        console.log(e)
    }
})
//---------------------------------retrieve the subject notices----------------------------------------
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

//-----------------------------------Delete the Subject notices---------------------------------------
router.delete('/deleteSubjectNotices/:id', (req,res) =>{
    const id = req.params.id;
    console.log(id);
    try {
        SubjectNotice.findByIdAndDelete({_id:id}).exec();
        res.send({success: true})
    }catch (e) {
        res.send({success: false})
    }
})

//-----------------------------------update the Subject notices----------------------------------------
router.put('/updateSubjectNotices',async(req,res) => {
    const body = req.body;
    try{
        await SubjectNotice.findByIdAndUpdate({_id:body.id},{
            noticeHeading:body.noticeHeading,
            noticeDetails:body.noticeDetails,
            subjectSelect:body.subjectSelect
        })
        res.send({success:true})
    }catch (e) {
        console.log(e)
    }
})

//------------------------------------get the notices by ID------------------------------------------
router.get('/getSpecificNotices/:id',async (req,res)=>{
    const id = req.params.id;
    try{
        const info = await SubjectNotice.findOne({_id:id});
        res.send({data:info,success:true});
    }catch (e) {
        console.log(e);
    }
})

//**************crud for Subject Materials****************************************************
//-----------------------insert the Subject Materials and File upload------------------------------------------
router.post('/insertSubjectMaterials',upload.single("lessonUpload"),async (req,res) => {
    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path,{ public_id: req.file.originalname,resource_type: "raw" });
        let subjectMaterial = new SubjectMaterial({
            term: req.body.term,
            week: req.body.week,
            subjectChoose: req.body.subjectChoose,
            unitName: req.body.unitName,
            lectureLink: req.body.lectureLink,
            lessonUpload: result.url,
            cloudinaryID: result.public_id,
            grade:req.body.grade
        });
        // to Save these
        await subjectMaterial.save();
        res.send({success:true})
    } catch (err) {
        console.log(err);
    }
})

//------------------------------retrieve the subject Materials------------------------------------
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

//---------------------------Delete the Subject Materials---------------------------------------
router.delete('/deleteSubjectMaterials/:id', async (req,res) =>{
    const id = req.params.id;
    console.log(id);
    try {
        const data = await SubjectMaterial.findOne({_id:id}).exec();
        await SubjectMaterial.findByIdAndDelete({_id:id}).exec();
        await cloudinary.uploader.destroy(data.cloudinaryID);
        res.send({success: true})
    }catch (e) {
        res.send({success: false})
    }
})

//----------------------------get the Materials by ID---------------------------------------------
router.get('/getSpecificMaterials/:id',async (req,res)=>{
    const id = req.params.id;
    try{
        const info = await SubjectMaterial.findOne({_id:id});
        res.send({data:info,success:true});
    }catch (e) {
        console.log(e);
    }
})

//--------------------------update the Subject Materials------------------------------------------------
router.put('/updateMaterials',upload.single("lessonUpload"),async (req,res) => {

    console.log(req.body);
    console.log(req.body.lessonUpload === '');

    try{
        if (req.body.lessonUpload === ''){
            const id = req.body.id
            const term = req.body.term
            const week = req.body.week
            const subjectChoose = req.body.subjectChoose
            const unitName = req.body.unitName
            const lectureLink = req.body.lectureLink

            await SubjectMaterial.findByIdAndUpdate({_id:id},{
                term:term,
                week:week,
                subjectChoose:subjectChoose,
                unitName:unitName,
                lectureLink:lectureLink
                // lessonUpload:lessonUpload,
                // cloudinaryID:cloudinaryID
            });
            res.send({success:'true',message:"Successfully Materials updated"});
        }else {
            await cloudinary.uploader.destroy(req.body.cloudinaryID);
            const result = await cloudinary.uploader.upload(req.file.path,{ public_id: req.file.originalname,resource_type: "raw" });
            const id = req.body.id
            const term = req.body.term
            const week = req.body.week
            const subjectChoose = req.body.subjectChoose
            const unitName = req.body.unitName
            const lectureLink = req.body.lectureLink
            const lessonUpload = result.url
            const cloudinaryID = result.public_id

            await SubjectMaterial.findByIdAndUpdate({_id: id}, {
                term: term,
                week: week,
                subjectChoose: subjectChoose,
                unitName: unitName,
                lectureLink: lectureLink,
                lessonUpload: lessonUpload,
                cloudinaryID: cloudinaryID
            });
            res.send({success: 'true', message: "Successfully Materials updated"});
        }
    }catch (e) {
        console.log(e);
    }
})

router.get('/getSpecificTeacher/:empNum',async (req,res) => {
    const empNum = req.params.empNum;
    try{
        const result = await Teacher.findOne({empNum:empNum});
        res.send({data:result,success:true});
    }catch (e) {
        console.log(e)
    }
})

//test grade inserting
//---------------------------------- mahir's part -------------------------------------------

router.put('/updateGrades/term1',async (req,res) =>{

    try {
        const body = req.body;

        if(body.grade === '1'){
            if(body.subject === 'Sinhala'){
                await Grade1.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade1.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Mathematics': body.result}})
            }else if(body.subject === 'Environment'){
                await Grade1.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Environment': body.result}})
            }else if(body.subject === 'English'){
                await Grade1.findByIdAndUpdate({_id: body._id}, {$set: {'term1.English': body.result}})
            }else if(body.subject === 'Buddhism'){
                await Grade1.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Buddhism': body.result}})
            }
        }else if(body.grade === '2'){
            if(body.subject === 'Sinhala'){
                await Grade2.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade2.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Mathematics': body.result}})
            }else if(body.subject === 'Environment'){
                await Grade2.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Environment': body.result}})
            }else if(body.subject === 'English'){
                await Grade2.findByIdAndUpdate({_id: body._id}, {$set: {'term1.English': body.result}})
            }else if(body.subject === 'Buddhism'){
                await Grade2.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Buddhism': body.result}})
            }
        }else if(body.grade === "3"){
            if(body.subject === "Sinhala"){
                await Grade3.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Sinhala': body.result}})
            }else  if(body.subject === "Mathematics"){
                await Grade3.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Mathematics': body.result}})
            }else if(body.subject === 'Environment'){
                await Grade3.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Environment': body.result}})
            }else if(body.subject === 'English'){
                await Grade3.findByIdAndUpdate({_id: body._id}, {$set: {'term1.English': body.result}})
            }else if(body.subject === 'Buddhism'){
                await Grade3.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Buddhism': body.result}})
            }
        }else if(body.grade === '4'){
            if(body.subject === 'Sinhala'){
                await Grade4.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade4.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Mathematics': body.result}})
            }else if(body.subject === 'Environment'){
                await Grade4.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Environment': body.result}})
            }else if(body.subject === 'English'){
                await Grade4.findByIdAndUpdate({_id: body._id}, {$set: {'term1.English': body.result}})
            }else if(body.subject === 'Buddhism'){
                await Grade4.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Buddhism': body.result}})
            }
        }else if(body.grade === '5'){
            if(body.subject === 'Sinhala'){
                await Grade5.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Buddhism': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade5.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Mathematics': body.result}})
            }else if(body.subject === 'Environment'){
                await Grade5.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Environment': body.result}})
            }else if(body.subject === 'English'){
                await Grade5.findByIdAndUpdate({_id: body._id}, {$set: {'term1.English': body.result}})
            }else if(body.subject === 'Buddhism'){
                await Grade5.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Buddhism': body.result}})
            }
        }else if(body.grade === '6'){
            if(body.subject === 'Sinhala'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Mathematics': body.result}})
            }else if(body.subject === 'Science'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Science': body.result}})
            }else if(body.subject === 'HealthStudies'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term1.HealthStudies': body.result}})
            }else if(body.subject === 'English'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term1.English': body.result}})
            }else  if(body.subject === 'Buddhism'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Buddhism': body.result}})
            }else if(body.subject === 'History'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term1.History': body.result}})
            }else if(body.subject === 'Geography'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Geography': body.result}})
            }else if(body.subject === 'Civics'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Civics': body.result}})
            }else  if(body.subject === 'Art'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Art': body.result}})
            }else if(body.subject === 'Tamil'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Tamil': body.result}})
            }else if(body.subject === 'Islam'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Islam': body.result}})
            }
        }else if(body.grade === '7'){
            if(body.subject === 'Sinhala'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Mathematics': body.result}})
            }else if(body.subject === 'Science'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Science': body.result}})
            }else if(body.subject === 'HealthStudies'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term1.HealthStudies': body.result}})
            }else if(body.subject === 'English'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term1.English': body.result}})
            }else  if(body.subject === 'Buddhism'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Buddhism': body.result}})
            }else if(body.subject === 'History'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term1.History': body.result}})
            }else if(body.subject === 'Geography'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Geography': body.result}})
            }else if(body.subject === 'Civics'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Civics': body.result}})
            }else  if(body.subject === 'Art'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Art': body.result}})
            }else if(body.subject === 'Tamil'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Tamil': body.result}})
            }else if(body.subject === 'Islam'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Islam': body.result}})
            }
        }else if(body.grade === '8'){
            if(body.subject === 'Sinhala'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Mathematics': body.result}})
            }else if(body.subject === 'Science'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Science': body.result}})
            }else if(body.subject === 'HealthStudies'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term1.HealthStudies': body.result}})
            }else if(body.subject === 'English'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term1.English': body.result}})
            }else  if(body.subject === 'Buddhism'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Buddhism': body.result}})
            }else if(body.subject === 'History'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term1.History': body.result}})
            }else if(body.subject === 'Geography'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Geography': body.result}})
            }else if(body.subject === 'Civics'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Civics': body.result}})
            }else  if(body.subject === 'Art'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Art': body.result}})
            }else if(body.subject === 'Tamil'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Tamil': body.result}})
            }else if(body.subject === 'Islam'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Islam': body.result}})
            }
        }else if(body.grade === '9'){
            if(body.subject === 'Sinhala'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Mathematics': body.result}})
            }else if(body.subject === 'Science'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Science': body.result}})
            }else if(body.subject === 'HealthStudies'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term1.HealthStudies': body.result}})
            }else if(body.subject === 'English'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term1.English': body.result}})
            }else  if(body.subject === 'Buddhism'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Buddhism': body.result}})
            }else if(body.subject === 'History'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term1.History': body.result}})
            }else if(body.subject === 'Geography'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Geography': body.result}})
            }else if(body.subject === 'Civics'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Civics': body.result}})
            }else  if(body.subject === 'Art'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Art': body.result}})
            }else if(body.subject === 'Tamil'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Tamil': body.result}})
            }else if(body.subject === 'Islam'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term1.Islam': body.result}})
            }
        }

        res.send({success: true});
    }catch (e) {
        console.log(e)
    }
})

router.put('/updateGrades/term2',async (req,res)=>{

    try {
        const body = req.body;

        if(body.grade === '1'){
            if(body.subject === 'Sinhala'){
                await Grade1.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade1.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Mathematics': body.result}})
            }else if(body.subject === 'Environment'){
                await Grade1.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Environment': body.result}})
            }else if(body.subject === 'English'){
                await Grade1.findByIdAndUpdate({_id: body._id}, {$set: {'term2.English': body.result}})
            }else if(body.subject === 'Buddhism'){
                await Grade1.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Buddhism': body.result}})
            }
        }else if(body.grade === '2'){
            if(body.subject === 'Sinhala'){
                await Grade2.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade2.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Mathematics': body.result}})
            }else if(body.subject === 'Environment'){
                await Grade2.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Environment': body.result}})
            }else if(body.subject === 'English'){
                await Grade2.findByIdAndUpdate({_id: body._id}, {$set: {'term2.English': body.result}})
            }else if(body.subject === 'Buddhism'){
                await Grade2.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Buddhism': body.result}})
            }
        }else if(body.grade === "3"){
            if(body.subject === "Sinhala"){
                await Grade3.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Sinhala': body.result}})
            }else  if(body.subject === "Mathematics"){
                await Grade3.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Mathematics': body.result}})
            }else if(body.subject === 'Environment'){
                await Grade3.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Environment': body.result}})
            }else if(body.subject === 'English'){
                await Grade3.findByIdAndUpdate({_id: body._id}, {$set: {'term2.English': body.result}})
            }else if(body.subject === 'Buddhism'){
                await Grade3.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Buddhism': body.result}})
            }
        }else if(body.grade === '4'){
            if(body.subject === 'Sinhala'){
                await Grade4.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade4.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Mathematics': body.result}})
            }else if(body.subject === 'Environment'){
                await Grade4.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Environment': body.result}})
            }else if(body.subject === 'English'){
                await Grade4.findByIdAndUpdate({_id: body._id}, {$set: {'term2.English': body.result}})
            }else if(body.subject === 'Buddhism'){
                await Grade4.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Buddhism': body.result}})
            }
        }else if(body.grade === '5'){
            if(body.subject === 'Sinhala'){
                await Grade5.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Buddhism': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade5.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Mathematics': body.result}})
            }else if(body.subject === 'Environment'){
                await Grade5.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Environment': body.result}})
            }else if(body.subject === 'English'){
                await Grade5.findByIdAndUpdate({_id: body._id}, {$set: {'term2.English': body.result}})
            }else if(body.subject === 'Buddhism'){
                await Grade5.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Buddhism': body.result}})
            }
        }else if(body.grade === '6'){
            if(body.subject === 'Sinhala'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Mathematics': body.result}})
            }else if(body.subject === 'Science'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Science': body.result}})
            }else if(body.subject === 'HealthStudies'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term2.HealthStudies': body.result}})
            }else if(body.subject === 'English'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term2.English': body.result}})
            }else  if(body.subject === 'Buddhism'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Buddhism': body.result}})
            }else if(body.subject === 'History'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term2.History': body.result}})
            }else if(body.subject === 'Geography'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Geography': body.result}})
            }else if(body.subject === 'Civics'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Civics': body.result}})
            }else  if(body.subject === 'Art'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Art': body.result}})
            }else if(body.subject === 'Tamil'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Tamil': body.result}})
            }else if(body.subject === 'Islam'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Islam': body.result}})
            }
        }else if(body.grade === '7'){
            if(body.subject === 'Sinhala'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Mathematics': body.result}})
            }else if(body.subject === 'Science'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Science': body.result}})
            }else if(body.subject === 'HealthStudies'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term2.HealthStudies': body.result}})
            }else if(body.subject === 'English'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term2.English': body.result}})
            }else  if(body.subject === 'Buddhism'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Buddhism': body.result}})
            }else if(body.subject === 'History'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term2.History': body.result}})
            }else if(body.subject === 'Geography'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Geography': body.result}})
            }else if(body.subject === 'Civics'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Civics': body.result}})
            }else  if(body.subject === 'Art'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Art': body.result}})
            }else if(body.subject === 'Tamil'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Tamil': body.result}})
            }else if(body.subject === 'Islam'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Islam': body.result}})
            }
        }else if(body.grade === '8'){
            if(body.subject === 'Sinhala'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Mathematics': body.result}})
            }else if(body.subject === 'Science'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Science': body.result}})
            }else if(body.subject === 'HealthStudies'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term2.HealthStudies': body.result}})
            }else if(body.subject === 'English'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term2.English': body.result}})
            }else  if(body.subject === 'Buddhism'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Buddhism': body.result}})
            }else if(body.subject === 'History'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term2.History': body.result}})
            }else if(body.subject === 'Geography'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Geography': body.result}})
            }else if(body.subject === 'Civics'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Civics': body.result}})
            }else  if(body.subject === 'Art'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Art': body.result}})
            }else if(body.subject === 'Tamil'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Tamil': body.result}})
            }else if(body.subject === 'Islam'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Islam': body.result}})
            }
        }else if(body.grade === '9'){
            if(body.subject === 'Sinhala'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Mathematics': body.result}})
            }else if(body.subject === 'Science'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Science': body.result}})
            }else if(body.subject === 'HealthStudies'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term2.HealthStudies': body.result}})
            }else if(body.subject === 'English'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term2.English': body.result}})
            }else  if(body.subject === 'Buddhism'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Buddhism': body.result}})
            }else if(body.subject === 'History'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term2.History': body.result}})
            }else if(body.subject === 'Geography'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Geography': body.result}})
            }else if(body.subject === 'Civics'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Civics': body.result}})
            }else  if(body.subject === 'Art'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Art': body.result}})
            }else if(body.subject === 'Tamil'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Tamil': body.result}})
            }else if(body.subject === 'Islam'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term2.Islam': body.result}})
            }
        }

        res.send({success: true});
    }catch (e) {
        console.log(e)
    }

})

router.put('/updateGrades/term3',async (req,res)=>{

    try {
        const body = req.body;

        if(body.grade === '1'){
            if(body.subject === 'Sinhala'){
                await Grade1.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade1.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Mathematics': body.result}})
            }else if(body.subject === 'Environment'){
                await Grade1.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Environment': body.result}})
            }else if(body.subject === 'English'){
                await Grade1.findByIdAndUpdate({_id: body._id}, {$set: {'term3.English': body.result}})
            }else if(body.subject === 'Buddhism'){
                await Grade1.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Buddhism': body.result}})
            }
        }else if(body.grade === '2'){
            if(body.subject === 'Sinhala'){
                await Grade2.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade2.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Mathematics': body.result}})
            }else if(body.subject === 'Environment'){
                await Grade2.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Environment': body.result}})
            }else if(body.subject === 'English'){
                await Grade2.findByIdAndUpdate({_id: body._id}, {$set: {'term3.English': body.result}})
            }else if(body.subject === 'Buddhism'){
                await Grade2.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Buddhism': body.result}})
            }
        }else if(body.grade === "3"){
            if(body.subject === "Sinhala"){
                await Grade3.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Sinhala': body.result}})
            }else  if(body.subject === "Mathematics"){
                await Grade3.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Mathematics': body.result}})
            }else if(body.subject === 'Environment'){
                await Grade3.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Environment': body.result}})
            }else if(body.subject === 'English'){
                await Grade3.findByIdAndUpdate({_id: body._id}, {$set: {'term3.English': body.result}})
            }else if(body.subject === 'Buddhism'){
                await Grade3.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Buddhism': body.result}})
            }
        }else if(body.grade === '4'){
            if(body.subject === 'Sinhala'){
                await Grade4.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade4.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Mathematics': body.result}})
            }else if(body.subject === 'Environment'){
                await Grade4.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Environment': body.result}})
            }else if(body.subject === 'English'){
                await Grade4.findByIdAndUpdate({_id: body._id}, {$set: {'term3.English': body.result}})
            }else if(body.subject === 'Buddhism'){
                await Grade4.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Buddhism': body.result}})
            }
        }else if(body.grade === '5'){
            if(body.subject === 'Sinhala'){
                await Grade5.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Buddhism': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade5.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Mathematics': body.result}})
            }else if(body.subject === 'Environment'){
                await Grade5.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Environment': body.result}})
            }else if(body.subject === 'English'){
                await Grade5.findByIdAndUpdate({_id: body._id}, {$set: {'term3.English': body.result}})
            }else if(body.subject === 'Buddhism'){
                await Grade5.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Buddhism': body.result}})
            }
        }else if(body.grade === '6'){
            if(body.subject === 'Sinhala'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Mathematics': body.result}})
            }else if(body.subject === 'Science'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Science': body.result}})
            }else if(body.subject === 'HealthStudies'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term3.HealthStudies': body.result}})
            }else if(body.subject === 'English'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term3.English': body.result}})
            }else  if(body.subject === 'Buddhism'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Buddhism': body.result}})
            }else if(body.subject === 'History'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term3.History': body.result}})
            }else if(body.subject === 'Geography'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Geography': body.result}})
            }else if(body.subject === 'Civics'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Civics': body.result}})
            }else  if(body.subject === 'Art'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Art': body.result}})
            }else if(body.subject === 'Tamil'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Tamil': body.result}})
            }else if(body.subject === 'Islam'){
                await Grade6.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Islam': body.result}})
            }
        }else if(body.grade === '7'){
            if(body.subject === 'Sinhala'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Mathematics': body.result}})
            }else if(body.subject === 'Science'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Science': body.result}})
            }else if(body.subject === 'HealthStudies'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term3.HealthStudies': body.result}})
            }else if(body.subject === 'English'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term3.English': body.result}})
            }else  if(body.subject === 'Buddhism'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Buddhism': body.result}})
            }else if(body.subject === 'History'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term3.History': body.result}})
            }else if(body.subject === 'Geography'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Geography': body.result}})
            }else if(body.subject === 'Civics'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Civics': body.result}})
            }else  if(body.subject === 'Art'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Art': body.result}})
            }else if(body.subject === 'Tamil'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Tamil': body.result}})
            }else if(body.subject === 'Islam'){
                await Grade7.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Islam': body.result}})
            }
        }else if(body.grade === '8'){
            if(body.subject === 'Sinhala'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Mathematics': body.result}})
            }else if(body.subject === 'Science'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Science': body.result}})
            }else if(body.subject === 'HealthStudies'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term3.HealthStudies': body.result}})
            }else if(body.subject === 'English'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term3.English': body.result}})
            }else  if(body.subject === 'Buddhism'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Buddhism': body.result}})
            }else if(body.subject === 'History'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term3.History': body.result}})
            }else if(body.subject === 'Geography'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Geography': body.result}})
            }else if(body.subject === 'Civics'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Civics': body.result}})
            }else  if(body.subject === 'Art'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Art': body.result}})
            }else if(body.subject === 'Tamil'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Tamil': body.result}})
            }else if(body.subject === 'Islam'){
                await Grade8.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Islam': body.result}})
            }
        }else if(body.grade === '9'){
            if(body.subject === 'Sinhala'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Sinhala': body.result}})
            }else  if(body.subject === 'Mathematics'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Mathematics': body.result}})
            }else if(body.subject === 'Science'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Science': body.result}})
            }else if(body.subject === 'HealthStudies'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term3.HealthStudies': body.result}})
            }else if(body.subject === 'English'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term3.English': body.result}})
            }else  if(body.subject === 'Buddhism'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Buddhism': body.result}})
            }else if(body.subject === 'History'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term3.History': body.result}})
            }else if(body.subject === 'Geography'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Geography': body.result}})
            }else if(body.subject === 'Civics'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Civics': body.result}})
            }else  if(body.subject === 'Art'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Art': body.result}})
            }else if(body.subject === 'Tamil'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Tamil': body.result}})
            }else if(body.subject === 'Islam'){
                await Grade9.findByIdAndUpdate({_id: body._id}, {$set: {'term3.Islam': body.result}})
            }
        }

        res.send({success: true});
    }catch (e) {
        console.log(e)
    }

})

router.get('/getSpecificGrades/:grade/:subject',async (req,res)=>{

    const subject = req.params.subject;
    const grade = req.params.grade;

    let result = null;

    try{
        if(grade === '1'){
            result = await Grade1.find().select(`term1.${subject} term2.${subject} term3.${subject} RegistrationNumber name`)
        }else if(grade === '2'){
            result = await Grade2.find().select(`term1.${subject} term2.${subject} term3.${subject} RegistrationNumber name`)
        }else if(grade === '3'){
            result = await Grade3.find().select(`term1.${subject} term2.${subject} term3.${subject} RegistrationNumber name`)
        }else if(grade === '4'){
            result = await Grade4.find().select(`term1.${subject} term2.${subject} term3.${subject} RegistrationNumber name`)
        }else if(grade === '5'){
             result = await Grade5.find().select(`term1.${subject} term2.${subject} term3.${subject} RegistrationNumber name`)
        }else if(grade === '6'){
            result = await Grade6.find().select(`term1.${subject} term2.${subject} term3.${subject} RegistrationNumber name`)
        }else if(grade === '7'){
            result = await Grade7.find().select(`term1.${subject} term2.${subject} term3.${subject} RegistrationNumber name`)
        }else if(grade === '8'){
            result = await Grade8.find().select(`term1.${subject} term2.${subject} term3.${subject} RegistrationNumber name`)
        }else if(grade === '9'){
            result = await Grade9.find().select(`term1.${subject} term2.${subject} term3.${subject} RegistrationNumber name`)
        }

        res.send({data:result,success:true});
    }catch (e) {
        console.log(e)
    }

})
//---------------------------------- end of mahir's part -------------------------------------------

//attendance retrieve for teacher
router.get('/getDates',async (req,res) => {

    try {
        const result = await Attendance.aggregate([
            {
                $sort:{
                    'attendanceDate':-1
                }
            },
                {
                $group:{
                    _id: {attendanceDate:"$attendanceDate"}
                }
            }
        ])

        res.send({data:result,success:true})
    }catch (e) {
        console.log(e)
    }

})

router.get('/getAllDetailsOfAttendance',async (req,res) => {

    try {
        const result = await Attendance.find()

        res.send({data:result,success:true})
    }catch (e) {
        console.log(e)
    }

})

module.exports = router;
