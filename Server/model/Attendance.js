const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of Conference
const attendanceSchema = Schema({

    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    attendanceDate:{
        type: String,
        required: true,
    },
    grade:{
        type:String,
        required:true
    }
});

const attendance = mongoose.model('attendance', attendanceSchema);
module.exports = attendance;