import express from "express";
const router = express.Router();
// const {allStudent,createStudent,updateStudent,deleteStudent} = require ('../controllers/studentController.js');
import {allStudent,createStudent,updateStudent,deleteStudent} from '../controllers/studentController.js';

router.get("/all",allStudent);
router.post("/create", createStudent);
router.put("/update",updateStudent);
router.delete("/delete", deleteStudent);

export default router;
