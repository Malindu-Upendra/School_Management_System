const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of Conference
const studentSchema = Schema({

    administrationNum: {
        type: String,
        required: true,
        unique:true
    },
    name:{
        type: String,
        required: true
    },
    birthday:{
        type: String,
    },
    age:{
        type: String,
    },
    grade:{
        type: String,
        required: true
    },
    role:{
        type: String,
        default: "student"
    },
    email:{
        type:String,
    },
    password:{
        type: String,
    }
});

const student = mongoose.model('students', studentSchema);
module.exports = student;