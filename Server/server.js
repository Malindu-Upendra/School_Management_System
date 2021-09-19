const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const admin = require('./routes/AdminRoutes');
const teacher = require('./routes/TeacherRoutes');
const timetable = require('./routes/TeacherTimetableRoutes');
const user = require('./routes/LoginRoutes')
const student = require('./routes/StudentRoutes')
const public = require('./routes/PublicRoutes')

const app = express();
app.use(cors());
app.use(bodyparser.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = "mongodb+srv://malindu:nP2XX74YaxZWJFOE@cluster0.ztyq5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(MONGO_URI,{useNewUrlParser:true, useUnifiedTopology:true ,useCreateIndex:true , useFindAndModify:false}).
then(() => app.listen(PORT,() => console.log(`connection established successfully on port: ${PORT}`))).
catch((err) => console.log(err.message));

//declaring path to use Rest Services
app.use('/admin',admin);
app.use('/teacher',teacher);
app.use('/classroom',timetable);
app.use('/student',student);
app.use('/public',public);
app.use('/login',user);


