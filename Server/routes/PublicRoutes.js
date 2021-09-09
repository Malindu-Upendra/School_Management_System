const express = require('express');
const router = express.Router();
const Event = require('../model/Event')

router.get('/displayEvents',async (req,res) => {

    try {
        const events = await Event.find()
        res.send({data:events,success:true})
    } catch (err) {
        console.log(err);
    }

})

module.exports = router;