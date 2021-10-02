const express = require('express');
const router = express.Router();
const Event = require('../model/Event')
const upload = require('../utils/multer.js');
const cloudinary = require('../utils/cloudinary.js');

router.get('/displayEvents',async (req,res) => {

    try {
        const events = await Event.find()
        res.send({data:events,success:true})
    } catch (err) {
        console.log(err);
    }

})

router.get('/getSpecificEvent/:id',async (req,res) => {

    const id = req.params.id;

    try{
        const event = await Event.findOne({_id:id})
        res.send({data:event,success:true})
    }catch (e) {
        console.log(e)
    }

})

router.put('/updateSpecificEvent',upload.single("flyer"),async (req,res) => {

    try {
        if (req.body.flyer === ''){
            const id = req.body.id
            const eventName = req.body.eventName
            const description = req.body.description
            const venue = req.body.venue
            const link = req.body.link
            const selectedDate = req.body.selectedDate
            const name = req.body.name
            const email = req.body.email
            const phoneNumber = req.body.phoneNumber

            await Event.findByIdAndUpdate({_id:id},{
                eventName:eventName,
                description:description,
                venue:venue,
                link:link,
                selectedDate:selectedDate,
                name:name,
                email:email,
                phoneNumber:phoneNumber}).exec();

            res.send({success:'true',message:"Successfully updated"});
        }else{
            await cloudinary.uploader.destroy(req.body.cloudinaryID);

            const result = await cloudinary.uploader.upload(req.file.path);

            const id = req.body.id
            const eventName = req.body.eventName
            const description = req.body.description
            const venue = req.body.venue
            const link = req.body.link
            const selectedDate = req.body.selectedDate
            const flyer = result.url
            const name = req.body.name
            const email = req.body.email
            const phoneNumber = req.body.phoneNumber
            const cloudinaryID = result.public_id

            await Event.findByIdAndUpdate({_id:id},{
                eventName:eventName,
                description:description,
                venue:venue,
                link:link,
                selectedDate:selectedDate,
                flyer:flyer,
                name:name,
                email:email,
                phoneNumber:phoneNumber,
                cloudinaryID:cloudinaryID});

            res.send({success:'true',message:"Successfully updated"});
        }
            }catch (e) {
        console.log(e)
    }

})

router.delete('/deleteEvent/:cid/:eid',async (req,res) => {

    try{
        await cloudinary.uploader.destroy(req.params.cid);

        await Event.findByIdAndDelete({_id:req.params.eid});

        res.send({success:'true'});
    }catch (e) {
        console.log(e)
    }

})

router.get('/getClassroomTimetables',async (req,res) => {

})

module.exports = router;
