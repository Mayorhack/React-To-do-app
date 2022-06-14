import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [error, setError] = useState(false);
  const [tasker, setText] = useState({
    text: "",
    day: "",
    reminder: false,
  });

  const handleChange = function (e) {
    const value = e.target.value;
    const name = e.target.name;
    console.log(e);
    setText((prevText) => {
      return name === "check"
        ? { ...prevText, reminder: e.target.checked }
        : { ...prevText, [name]: value };
    });
  };

  const saveTask = function (e) {
    e.preventDefault();
    if (tasker.text) {
      onAdd(tasker);
    } else {
      setError((prevError) => !prevError);
    }
    setText({
      text: "",
      day: "",
      reminder: false,
    });
  };
  const errorStyles = {
    animation: "error 1s ease",
  };

  return (
    <form className="form" onSubmit={saveTask}>
      <div className="form-control">
        <label htmlFor="text">Task</label>

        <input
          type="text"
          name="text"
          placeholder="Add Task"
          onChange={handleChange}
          value={tasker.text}
          style={error ? errorStyles : { display: "block" }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="date">Date and Time</label>
        <input
          type="text"
          name="day"
          placeholder="Add Date and Time"
          onChange={handleChange}
          value={tasker.day}
        />
      </div>
      <div className="form-control form-check">
        <label htmlFor="taskName">Set Reminder</label>
        <input
          type="checkbox"
          name="check"
          onChange={handleChange}
          checked={tasker.reminder}
        />
      </div>
      <input type="submit" value="Save Task" className="btn-submit" />
    </form>
  );
};

export default AddTask;
