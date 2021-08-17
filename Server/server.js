const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const admin = require('./routes/admin.js');

const app = express();
app.use(cors());
app.use(bodyparser.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = ""

mongoose.connect(MONGO_URI,{useNewUrlParser:true, useUnifiedTopology:true ,useCreateIndex:true , useFindAndModify:false}).
then(() => app.listen(PORT,() => console.log(`connection established successfully on port: ${PORT}`))).
catch((err) => console.log(err.message));

//declaring path to use Rest Services
app.use('/admin',admin);

