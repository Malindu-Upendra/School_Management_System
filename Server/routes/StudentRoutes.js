const express = require('express');
const router = express.Router();
const cloudinary = require('../utils/cloudinary.js');
const upload = require('../utils/multer.js');
const Event = require('../model/Event')

router.post('/addEvent',upload.single("flyer"),async (req,res) => {

    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path,{ public_id: req.file.originalname,resource_type: "raw" });
        console.log(result);
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

module.exports = router;