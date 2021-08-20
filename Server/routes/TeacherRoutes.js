const express = require('express');
const SubjectNotice = require('../model/SubjectNotice.js')
const SubjectMaterial = require('../model/SubjectMaterials')

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

//**************crud for Subject Materials****************************************************
//insert the Subject Materials
router.post('/insertSubjectMaterials',async (req,res) => {
    const body = req.body;
    try {
        const subjectMaterial = new SubjectMaterial(body);
        await subjectMaterial.save();
        res.send({success:true})
    }catch (e) {
        console.log(e)
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

module.exports = router;