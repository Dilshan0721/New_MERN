import { useEffect, useState } from "react";
import Form from "./components/Form";
import { NavLink, Route,Routes } from "react-router";
import Students from "./components/Student";

function App() {
  const [studentsData, setStudentsData] = useState([]);

   async function getStudents() {
    const data = await fetch("http://localhost:3000/students");
    const students = await data.json();
    setStudentsData(students);
  }

  // useEffect(() => {
  //   getStudents();
  // }, []);

  return (
    <div>
      {/* <h1>Students</h1>
      {studentsData.map((student) => {
        return (
          <li>
            {student.name} - {student.age}
          </li>
        );
      })} */}

      <div>
        <h1>Home Page</h1>
      </div>

      <ul>
        <li>
          <NavLink to="/students">Students</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add Student</NavLink>
        </li>
        <li>
            <NavLink to="/form">Form</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/students" element={<Students/>} />
        <Route path="/add" element={<h1>This is add Page</h1>} />
        <Route path="/form" element={<Form getStudents={getStudents}/>} />
      </Routes>
    </div>
  );
}

export default App;
