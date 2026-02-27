import React, { useEffect,useState} from "react";

function Student() {
  const [studentsData, setStudentsData] = useState([]);

  async function getStudents() {
    const data = await fetch("http://localhost:3000/students");
    const students = await data.json();
    setStudentsData(students);
  }

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <>
      {" "}
      <h1>Students</h1>
      {studentsData.map((student) => {
        return (
          <li>
            {student.name} - {student.age}
          </li>
        );
      })}
    </>
  );
}

export default Student;
