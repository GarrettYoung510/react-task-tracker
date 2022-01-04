import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState([

    {
      id: 1,
      text: 'Study AWS',
      day: 'Jan 4 at 3:30 pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Study Kubernetes',
      day: 'feb 1 at 2:30 pm',
      reminder: true,
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No Tasks to show'
      }
    </div>
  );
}

export default App;
