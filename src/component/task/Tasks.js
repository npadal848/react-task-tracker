import Task from "./Task";

const Tasks = ({tasks, onDeleteTask})=> {
    
    return(
        <div >
            {tasks.map((task)=>(
                <Task key={task.id} task={task} onDelete={onDeleteTask}></Task>
            ))}
        </div>
    );

}

export default Tasks