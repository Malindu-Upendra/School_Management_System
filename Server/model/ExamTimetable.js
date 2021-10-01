const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Examtimetable = Schema({

    grade:{
        type:String,
        required:false
    },

    term:{
        type:String,
        required:false
    },

    date:{
        type:String,
        required:false
    },
    examtype:{
        type:String,
        required:false
    },
    starttime:{
        type:String,
        required:false
    },

    endtime:{
        type:String,
        required:false
    },
    subjectcode:{
        type:String,
        required:false
    },
    subjectname:{
        type:String,
        required:false
    },

});

const Exam = mongoose.model('exams',Examtimetable);
module.exports=Exam;