import { useState } from 'react';
import dateFormat from 'dateformat';
import { format } from 'date-fns';

const AddTask = ({ onAdd }) =>{

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onAddTask = (e) => {
        e.preventDefault()
        if(!text){
            alert('Please add task')
            return
        }
        onAdd({ text, day, reminder})    

        setText('');
        setDay('');
        setReminder(false)
    } 

    return (
        <form className = 'add-form' onSubmit={(e) => onAddTask(e)}>
            <div className = 'form-control'>
                <label>Task</label>
                <input type='text'
                value={text} 
                onChange = {(e)=>setText(e.target.value)}
                placeholder = 'Add Task' />
            </div>
            
            <div className = 'form-control'>
                <label>Time</label>
                <input type='datetime-local' 
                value={day} 
                onChange = {(e) => setDay(e.target.value)}
                placeholder = 'Add Day' />
            </div>

            <div className = 'form-control form-control-check' >
                <label>Reminder</label>
                <input 
                checked = {reminder}
                onChange = {(e) => setReminder(e.currentTarget.checked)}
                type='checkbox' />
            </div>

            <input type='submit' value = 'Save Task' 
            className = 'btn btn-block'/>
        </form>
    )
}

export default AddTask