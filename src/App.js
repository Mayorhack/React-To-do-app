import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [darkMode, setDarkode] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async function () {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);
  const fetchTask = async function (id) {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const onShow = function () {
    setShowAddTask((prev) => !prev);
  };
  const toggleReminder = async function (id) {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    console.log(updTask);
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    const data = await res.json();

    setTasks((prevTask) => {
      return prevTask.map((prev) =>
        prev.id === id ? { ...prev, reminder: data.reminder } : prev
      );
    });
  };
  const deleteTask = async function (id) {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks((prev) => {
      return prev.filter((pre) => pre.id !== id);
    });
  };
  const submit = async function (task) {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();

    setTasks((prevTask) => {
      return [...prevTask, { ...data }];
    });
  };
  const toggleMode = function (e) {
    e.target.classList.contains("buton")
      ? e.target.classList.toggle("translate")
      : e.target.children[0].classList.toggle("translate");
    setDarkode((prevMode) => !prevMode);
  };
  const TaskDashboard = () => {
    return (
      <div>
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
  };

  return (
    <Router>
      <div className={darkMode ? "app dark-mode" : "app"}>
        <Header onclick={onShow} showAddTask={showAddTask} />

        <Routes>
          <Route path="/" exact element={<TaskDashboard />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
