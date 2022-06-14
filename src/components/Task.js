import { FaTimes } from "react-icons/fa";

const Task = ({ task, ondelete, onToggle, darkMode }) => {
  const styles = {
    borderLeft: "5px solid green",
  };
  return (
    <div
      className={darkMode ? "task dark-mode2" : "task"}
      style={task.reminder ? styles : task}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => ondelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
