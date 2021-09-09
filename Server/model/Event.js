const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of Conference
const eventSchema = Schema({

    eventName:{
        type:String
    },
    description:{
        type:String
    },
    venue:{
        type:String
    },
    link:{
        type:String
    },
    selectedDate:{
        type:String
    },
    flyer:{
        type:String
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    phoneNumber:{
        type:Number
    },
    userID:{
        type:String
    },
    cloudinaryID:{
        type: String
    }
});

const event = mongoose.model('Events', eventSchema);
module.exports = event;