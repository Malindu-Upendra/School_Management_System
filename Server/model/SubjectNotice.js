
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Data Structure Of SubjectNotice
const subjectNoticeSchema = Schema({

    noticeHeading: {
        type: String,
        required: true,
    },
    noticeDetails:{
        type: String,
        required: true
    },
    subjectSelect:{
        type: String,
        required: true
    },
    role:{
        type: String,
        default: "teacher"
    }
});

const subjectNotice = mongoose.model('subjectNotices', subjectNoticeSchema);
module.exports = subjectNotice;