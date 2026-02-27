import React from "react";

export default function Form() {
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
  }
  return (
    <div onSubmit={handleSubmit}>
      <h2>Form</h2>
      <form>
        <input type="text" placeholder="Name" />
        <br />
        <input type="number" placeholder="Age" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
