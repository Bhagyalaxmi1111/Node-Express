import express from 'express';
// const express=require('express');
const app=express();
const port = process.env.PORT || '3000';
// const studentRouter = require('./routes/studentRoute.js');
// const teacherRouter=require('./routes/teacherRoute.js');
import studentRouter from './routes/studentRoute.js';
import teacherRouter from './routes/teacherRoute.js';


//load router modules
app.use('/student',studentRouter);
app.use('/teacher',teacherRouter);


app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
});