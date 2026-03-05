import "./Home.css"
import React, { useState } from "react";

export const Register = () => {
  // State hooks for form fields
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Successfully Completed")
  };

  const handleCancel = () => {
    setName("");
    setAge("");
    setDate("");
  };

  return (
    <div className="Register">
      <h1>Booking Page</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name :
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />

        <label>
          Age :
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />

        <label>
          Date :
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <br />

        <button name="book" type="submit">
          Book
        </button>
        &nbsp;&nbsp;
        <button
          name="cancel"
          type="button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};