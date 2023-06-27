import express from 'express';
// const router = require('router');
const router = express.Router();

router.get('/all',(req,res)=>{
    res.send('All students');
});
router.post('/create',(req,res)=>{
    res.send('Student created');
});
router.put('/update',(req,res)=>{
    res.send('Student updated');
});
router.delete('/delete',(req,res)=>{
    res.send('Student deleted');
});

// module.exports=router;
export default router;

