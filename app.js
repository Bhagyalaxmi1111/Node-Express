import express from "express";
// const express=require('express');
const app = express();
const port = process.env.PORT || '3000';

// app.get('/student/:id', (req, res) => {
//   console.log(req.params);
//   res.send(`Student deleted ${req.params.id}`);
// });


// app.get('/product/:category/:id', (req, res) => {
//   console.log(req.params);
//   res.send(`Student deleted id = ${req.params.id} and category = ${req.params.category}`);
//   const { category, id } = req.params; //destructuring
//   console.log(`Category : ${category} id: ${id}`);
// });

// app.get('/train/:from-:to', (req, res) => {
//   console.log(req.params);
//   const { from, to } = req.params;
//   console.log(`Travelling from ${from} to ${to}`);
//   res.send(`Travelling from ${from} to ${to}`);
// });

// app.get('/train/:from-:to/and/:from1-:to1', (req, res) => {
//     console.log(req.params);
//     const { from, to,from1,to1 } = req.params;
//     console.log(`Travelling from ${from} to ${to} and ${from1} to ${to1}`);
//     res.send(`Travelling from ${from} to ${to} and ${from1} to ${to1}`);
// });

// app.get('/location/:state.:city',(req,res)=>{
//     console.log(req.params);
//     const {state, city}=req.params;
//     console.log(req.params);
//     res.send(`Location : ${state} and city :${city}`);
// })

//with regex
// app.get('/student/delete/:id([0-9]{2})',(req,res)=>{ //id should be two digits, if we give one digit, it will give error
//     console.log(req.params);
//     res.send(`Student deleted = ${req.params.id}`);
// });

// app.get('/:type(post|article)/:id', (req,res)=>{ //only post or article are allowed if other words are written it will give error
//     console.log(req.params);
//     res.send(`Post or article `)
// })

//app.param
//if id is passed as a requst parameter then only this will execute 
//test it replacing id with year, only in the immediate below method , it will not execute
//app.param will get executed only once even though path matches more than one time
// app.param('id',(req,res,next,id)=>{ 
//     console.log(`id = ${id}`);
//     next();
// })
// app.get('/user/:id',(req,res,next)=>{
//     console.log('This is user id path1');
//     next();
// })
// app.get('/user/:id',(req,res)=>{
//     console.log('This is user id path2');
//     res.send('response ok');
// }) //app.param ends

//app.param()-Array of Route parameter
    //
    // app.param(['id','page'],(req,res,next,value)=>{  //for each parametr of an array it will call once
    //     console.log(`called only once for = ${value}`);
    //     next();
    // })
    // app.get('/user/:id/:page',(req,res,next)=>{
    //     console.log('This is user id path1');
    //     next();
    // })
    // app.get('/user/:id/:page',(req,res)=>{
    //     console.log('This is user id path2');
    //     res.send('response ok');
    // }) ////app.param()-Array of Route parameter ends


    //Query string
    //when in url after question mark (?) you write, query string for that
    //e.g. //www.example.com/product?category=mobile
    app.get('/product',(req,res)=>{
      console.log(req.query); // request = http://localhost:3000/product?category=mobile&id=4
      const {category, id} = req.query;
      res.send(`Response Ok ${category} and ${id}`);
    })



app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
