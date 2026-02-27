import React from "react";

export default function Form({ getStudents }) {
  async function handleSubmit(e) {
    e.preventDefault();

    const name = e.target[0].value;
    const age = e.target[1].value;

    const response = await fetch("http://localhost:3000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age }),
    });

    const data = await response.json();
    console.log(data);

    // Refresh the student list after submission
    getStudents();

    // Clear the form
    e.target.reset();
  }
  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" />
        <br />
        <input type="number" placeholder="Age" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
