//routing
import express from 'express';
// const express=require('express');
const app=express();
const port = process.env.PORT || '3000';

// app.get('/',(req,res)=>{
//     res.send('Get method');
// });

// app.get('/about',(req,res)=>{
//     res.send('About Page');
// });

// app.get('/contact',(req,res)=>{
//     res.send('Contact Page');
// });

// //string pattern path
// app.get('/',(req,res)=>{
//     res.send('This route will match acd and abcd');
// });//string patte rn path ends

// //Regular expression path
// app.get(/a/,(req,res)=>{
//     res.send('This will work for all the path for localhost:3000/anytext where in anytext is there. if in place of anytext we write the text where a is not there it will not work');
// }); //Regular expression path

//one callback
// app.get('/cbExample1',(req,res)=>{
//     res.send('one callback example');
// }) ////one callback ends
// //more than one callback, if next is not written after first call back it will hang, not go anywhere, will stop there only
// app.get('/cbExample2',(req,res,next)=>{
//    console.log('first callback');
//    next();
// }, (req,res)=>{
//     console.log('second callback');
//     res.send('more than one callback example');
// });//more than one callback,

//an array of callback
// const cb1= (req, res,next)=>{
//     console.log('First callback');
//     next();
// }
// const cb2= (req, res,next)=>{
//     console.log('second callback');
//     next();
// }
// const cb3= (req, res)=>{
//     console.log('third callback');
//     res.send('array of callback');
// }

// app.get('/cbexample3',[cb1,cb2,cb3]); // will follow the sequence which is given here
//an array of callback ends

//combination of independent function and array of function
// const cb1= (req, res,next)=>{
//     console.log('First callback');
//     next();
// }
// const cb2= (req, res,next)=>{
//     console.log('second callback');
//     next();
// }
// const cb3= (req, res)=>{
//     console.log('third callback');
//     res.send('array of callback');
// }

// app.get('/cbexample4',[cb1,cb2],(req,res,next)=>{
//     console.log('Third callback');
//     next();
// },(req,res)=>{
//     console.log('Fourth callback');
//     res.send('combination of independent function and array of function')
// }); //combination of independent function and array of function ends

//chained route callback
//when path i.e. '/student' is same and http methods are different like below for the 
//same path then we use chained callback
// app.get('/student',(req,res)=>{
//     res.send('get all students');
// });
// app.post('/student',(req,res)=>{
//     res.send('create student');
// });
// app.put('/student',(req,res)=>{
//     res.send('update student');
// });

app.route('/student')
    .all((req,res,next)=>{
        console.log('First execute this for all http methods');
        next();
    })
    .get((req,res)=>{
        console.log('Get all students');
            res.send('get all students');
        })
    .post((req,res)=>{
        console.log('create student');
            res.send('create student');
        })
    .put((req,res)=>{
        console.log('update student');
            res.send('update student');
        });
//chained route callback ends

app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
});