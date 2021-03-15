import Header from './component/header/Header'
import {useState} from 'react'
import Tasks from './component/task/Tasks'

function App() {
  const title='Hello from App.js';

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Fetch Data',
        day: '25th March 2021 10:20:40 AM'
    },
    {
        id: 2,
        text: 'Post Data',
        day: '26th March 2021 12:20:40 PM'
    },
    {
        id: 3,
        text: 'Delete Data',
        day: '27th March 2021 09:20:40 AM'
    }
])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id!=id))
  }

  return (
    <div className='container'>
      <h3 style={{ color: 'blue'}}>
        Welcome to React JS Tutorial for Beginner
      </h3>
      <Header title={title}></Header>
      {tasks.length >0 ? <Tasks tasks={tasks} onDeleteTask={deleteTask}></Tasks>
      : 'No Task to show'}
    </div>
  );
}

export default App;
