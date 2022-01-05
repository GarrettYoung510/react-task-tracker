import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [tasks, setTasks] = useState([

    {
      id: 1,
      text: 'Code',
      day: 'Jan 4 at 3:30 pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Eat',
      day: 'Feb 1 at 2:30 pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Sleep',
      day: 'Never',
      reminder: true,
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    // if the task's id is equal to id passed in, spread all task values but change the reminder, else task
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to show'
      }
    </div>
  );
}

export default App;
