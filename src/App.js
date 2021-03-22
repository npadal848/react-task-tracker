import Header from './component/header/Header'
import {useState} from 'react'
import Tasks from './component/task/Tasks'
import AddTask from './component/task/AddTask'
import Task from './component/task/Task';

function App() {
  const title='Add Task';

  const [showAddForm, setShowAddForm] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Fetch Data',
        day: '25th March 2021 10:20:40 AM',
        reminder: true
    },
    {
        id: 2,
        text: 'Post Data',
        day: '26th March 2021 12:20:40 PM',
        reminder: true
    },
    {
        id: 3,
        text: 'Delete Data',
        day: '27th March 2021 09:20:40 AM',
        reminder: false
    }
])

const onAddTask = (task) => {
  console.log(task)

  const id=Math.floor(Math.random()*10000)+1
  const newTask={id, ...task}

  setTasks([...tasks, newTask])
}
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id!==id))
  }

  return (
    <div className='container'>
      <h3 style={{ color: 'blue'}}>
        Welcome to React JS Tutorial for Beginner
      </h3>
      <br/>
      <Header onClickAdd={() => setShowAddForm(!showAddForm)}
        showAdd={showAddForm} ></Header>
      {showAddForm && <AddTask onAdd={onAddTask} />}
      {tasks.length >0 ? <Tasks tasks={tasks} onDeleteTask={deleteTask}
         ></Tasks>
      : 'No Task to show'}
    </div>
  );
}

export default App;
