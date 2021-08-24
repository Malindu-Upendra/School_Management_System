const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Classroomtimetable = Schema({

    grade:{
        type:String,
        required:true,
        unique:true
    },

    day:{
        type:String,
        required:true
    },

    subjectname:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },

    subjectcode:{
        type:String,
        required:true
    },
    teacher:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },

});

const Classroom = mongoose.model('classrooms',Classroomtimetable);
 module.exports=Classroom;