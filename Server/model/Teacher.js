const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of Conference
const teacherSchema = Schema({

    empNum: {
        type: String,
        required: true,
        unique:true
    },
    fullName:{
        type: String,
        //required: true
    },
    gender:{
        type: String,
    },
    qualification:{
        type: String,
    },
    sectionalHead:{
        type: Boolean,
    },
    section:{
        type: String,
    },
    selectedGrades: [{
        type:Number,
    }],
    subject: {
        type: String,
    }
});

const teacher = mongoose.model('teachers', teacherSchema);
module.exports = teacher;

// {
//     "employeeNum":"TR001",
//     "firstName":"Mahir",
//     "lastName":"Azeem",
//     "gender":"Male",
//     "qualification":"Bachelors",
//     "sectionalHead":false,
//     "sectionalHeadGrade":"Primary",
//     "grade":[5,7],
//     "subject":"Maths"
// }