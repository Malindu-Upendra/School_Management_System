const express = require('express');
const SubjectNotice = require('../model/SubjectNotice.js')
const SubjectMaterial = require('../model/SubjectMaterials')
const cloudinary = require('../utils/cloudinary.js');
const upload = require('../utils/multer.js');
const router = express.Router();


//***********Crud for Subject Notices**********************************
//insert the subject notices
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
//retrieve the subject notices
router.get('/getSubjectNotices/:subject',async (req,res) => {
   const subject = req.params.subject;
    try {
        const subjectNotices = await SubjectNotice.find({subjectSelect:subject});
        res.send({data:subjectNotices,success:true})
    }catch (e) {
        console.log(e)
    }
})

//Delete the Subject notices
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

//update the Subject notices
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

//get the notices by ID
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
//insert the Subject Materials and File upload
router.post('/insertSubjectMaterials',upload.single("lessonUpload"),async (req,res) => {
    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path,{ public_id: req.file.originalname,resource_type: "raw" });
        console.log(result);
        let subjectMaterial = new SubjectMaterial({
            term: req.body.term,
            week: req.body.week,
            subjectChoose: req.body.subjectChoose,
            unitName: req.body.unitName,
            lectureLink: req.body.lectureLink,
            lessonUpload: result.url,
            cloudinaryID: result.public_id,
        });
        // to Save these
        await subjectMaterial.save();
        res.send({success:true})
    } catch (err) {
        console.log(err);
    }
})

//retrieve the subject Materials
router.get('/getSubjectMaterials/:subject',async (req,res) => {
    const subject = req.params.subject;

    try {
        const subjectMaterials = await SubjectMaterial.find({subjectChoose:subject});
        res.send({data:subjectMaterials,success:true})
    }catch (e) {
        console.log(e)
    }
})

//Delete the Subject Materials
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

//get the Materials by ID
router.get('/getSpecificMaterials/:id',async (req,res)=>{
    const id = req.params.id;
    try{
        const info = await SubjectMaterial.findOne({_id:id});
        res.send({data:info,success:true});
    }catch (e) {
        console.log(e);
    }
})

//update the Subject Materials
router.put('/updateMaterials',upload.single("lessonUpload"),async (req,res) => {

    try{
        await cloudinary.uploader.destroy(req.body.cloudinaryID);
        const result = await cloudinary.uploader.upload(req.file.path);

        const id = req.body.id
        const term = req.body.term
        const week = req.body.week
        const subjectChoose = req.body.subjectChoose
        const unitName = req.body.unitName
        const lectureLink = req.body.lectureLink
        const lessonUpload = result.url
        const cloudinaryID = result.public_id

        await SubjectMaterial.findByIdAndUpdate({_id:id},{
            term:term,
            week:week,
            subjectChoose:subjectChoose,
            unitName:unitName,
            lectureLink:lectureLink,
            lessonUpload:lessonUpload,
            cloudinaryID:cloudinaryID
          });
        res.send({success:'true',message:"Successfully Materials updated"});
    }catch (e) {
        console.log(e);
    }
})

module.exports = router;