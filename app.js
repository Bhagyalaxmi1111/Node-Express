import express from "express";
const app = express();
const port = process.env.PORT || "3000";
// const studentR = require('./routes/studentRoute');
import studentR from "./routes/studentRoute.js";
import teacherR from './routes/teacherRoute.js';



app.use('/student', studentR);
app.use('/teacher', teacherR);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
