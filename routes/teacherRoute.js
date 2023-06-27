import express from 'express';
const router = express.Router();

router.get('/all',(req,res)=>{
    res.send('All teacher');
});
router.post('/create',(req,res)=>{
    res.send('teacher created');
});
router.put('/update',(req,res)=>{
    res.send('teacher updated');
});
router.delete('/delete',(req,res)=>{
    res.send('teacher deleted');
});

// module.exports=router;
export default router;

