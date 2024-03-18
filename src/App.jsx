import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      Day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Take out the trash",
      Day: "March 12th at 5:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Doctor's Appointment",
      Day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  // Delete Task
  const DeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // ToggleReminder
  const ToggleReminder = (id) => {
    setTasks(tasks.map((task)=>{
        task.id === id ? {...task, reminder: !task.reminder } : task
    }))
    console.log({id});
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={DeleteTask} onToggle={ToggleReminder} />
      ) : (
        "No Task to show"
      )}
    </div>
  );
}
export default App;
