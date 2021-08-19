const express = require('express');
const SubjectNotice = require('../model/SubjectNotice.js')
const SubjectMaterial = require('../model/SubjectMaterials')

const router = express.Router();

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

module.exports = router;