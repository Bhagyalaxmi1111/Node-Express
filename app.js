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
// });

// //Regular expression path
// app.get(/a/,(req,res)=>{
//     res.send('This will work for all the path for localhost:3000/anytext where in anytext is there. if in place of anytext we write the text where a is not there it will not work');
// });

//one callback
// app.get('/cbExample1',(req,res)=>{
//     res.send('one callback example');
// })
// //more than one callback, if next is not written after first call back it will hang, not go anywhere, will stop there only
// app.get('/cbExample2',(req,res,next)=>{
//    console.log('first callback');
//    next();
// }, (req,res)=>{
//     console.log('second callback');
//     res.send('more than one callback example');
// });

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

//combination of independent function and array of function
const cb1= (req, res,next)=>{
    console.log('First callback');
    next();
}
const cb2= (req, res,next)=>{
    console.log('second callback');
    next();
}
const cb3= (req, res)=>{
    console.log('third callback');
    res.send('array of callback');
}

app.get('/cbexample4',[cb1,cb2],(req,res,next)=>{
    console.log('Third callback');
    next();
},(req,res)=>{
    console.log('Fourth callback');
    res.send('combination of independent function and array of function')
}); 






app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
});