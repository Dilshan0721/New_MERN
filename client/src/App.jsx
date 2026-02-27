import { useEffect, useState } from "react";
import Form from "./components/Form";

function App() {
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
    <div>
      <h1>Students</h1>
      {studentsData.map((student) => {
        return (
          <li>
            {student.name} - {student.age}
          </li>
        );
      })}

      <Form getStudents={getStudents} />
    </div>
  );
}

export default App;
