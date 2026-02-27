const express = require('express');
const app = express();
const cors = require('cors');

// middleware for json
app.use(express.json());

//implement cors
app.use(cors());

const students = [
    {
        id: 0,
        name: "Gihan",
        age: 13
    }, {
        id: 1,
        name: "John",
        age: 15
    }
]

app.get("/students", (req, res) => {
    res.json(students);
})

app.post("/students", (req, res) => {
    const { name, age } = req.body;
    students.push({ id: students.length, name, age });
    res.json({ message: "Student added successfully" });
});

app.delete("/students/:id", (req, res) => {
    const id = req.params.id;
    students.splice(id, 1);
    res.json({ message: "Student deleted " });
})

app.put("/students/:id", (req, res) => {
    const id = req.params.id;
    const { name, age } = req.body;
    students[id] = { id: parseInt(id), name, age };
    res.json({ message: "Student updated " });
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

