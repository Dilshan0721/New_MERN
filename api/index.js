const express = require('express');
const app = express();
const cors = require('cors');

const { Sequelize } = require('sequelize');
const databaseCon = require('./db/dbCon');
const Student = require('./db/Student');

// middleware for json
app.use(express.json());

//implement cors
app.use(cors());

databaseCon.sync({alter:true});

// const students = [
//     {
//         id: 0,
//         name: "Gihan",
//         age: 13
//     }, {
//         id: 1,
//         name: "John",
//         age: 15
//     }
// ]

app.get("/students", async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.post("/students", (req, res) => {
    const { name, age } = req.body;
    Student.create({ name, age });
    res.json({ message: "Student added successfully" });
});

app.delete("/students/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await Student.destroy({ where: { id } });
        res.json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.put("/students/:id", async (req, res) => {
    const id = req.params.id;
    const { name, age } = req.body;
    try {
        await Student.update({ name, age }, { where: { id } });
        res.json({ message: "Student updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

