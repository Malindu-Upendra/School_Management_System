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
router.get('/getSubjectNotices',async (req,res) => {
    try {
        const subjectNotices = await SubjectNotice.find();
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

//**************crud for Subject Materials****************************************************
//insert the Subject Materials
// router.post('/insertSubjectMaterials',async (req,res) => {
//     const body = req.body;
//     try {
//         const subjectMaterial = new SubjectMaterial(body);
//         await subjectMaterial.save();
//         res.send({success:true})
//     }catch (e) {
//         console.log(e)
//     }
// })

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
router.get('/getSubjectMaterials',async (req,res) => {
    try {
        const subjectMaterials = await SubjectMaterial.find();
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



module.exports = router;