const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Data Structure Of Conference
const userSchema = Schema({

    username: {
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
    }
});

const user = mongoose.model('users', userSchema);
module.exports = user;