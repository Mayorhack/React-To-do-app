import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, ondelete, onToggle, darkMode }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          ondelete={ondelete}
          onToggle={onToggle}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
};

export default Tasks;
