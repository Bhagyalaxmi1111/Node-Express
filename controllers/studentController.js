const allStudent =  (req, res) => {
    res.send("All students");
  };
  const createStudent = (req, res) => {
    res.send("Student created");
  };
  const updateStudent =  (req, res) => {
    res.send("Student updated");
  };
  const deleteStudent =(req, res) => {
    res.send("Student deleted");
  };

  export {allStudent,createStudent,updateStudent,deleteStudent};