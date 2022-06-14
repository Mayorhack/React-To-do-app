import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [darkMode, setDarkode] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: "Feb 6 at 1:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Reading's Appointment",
      day: "Feb 6 at 1:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Sleep's Appointment",
      day: "Feb 6 at 1:30pm",
      reminder: true,
    },
  ]);
  const onShow = function () {
    setShowAddTask((prev) => !prev);
  };
  const toggleReminder = function (id) {
    setTasks((prevTask) => {
      return prevTask.map((prev) =>
        prev.id === id ? { ...prev, reminder: !prev.reminder } : prev
      );
    });
  };
  const deleteTask = function (id) {
    setTasks((prev) => {
      return prev.filter((pre) => pre.id !== id);
    });
  };
  const submit = function (task) {
    setTasks((prevTask) => {
      return [...prevTask, { id: prevTask.length + 1, ...task }];
    });
  };
  const toggleMode = function (e) {
    e.target.classList.contains("buton")
      ? e.target.classList.toggle("translate")
      : e.target.children[0].classList.toggle("translate");
    setDarkode((prevMode) => !prevMode);
  };
  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <Header onclick={onShow} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={submit} />}
      {tasks.length ? (
        <Tasks
          tasks={tasks}
          ondelete={deleteTask}
          onToggle={toggleReminder}
          darkMode={darkMode}
        />
      ) : (
        <h4>No task to show</h4>
      )}
      <div className="toggle" onClick={toggleMode}>
        <div className="buton"></div>
      </div>
    </div>
  );
}

export default App;
