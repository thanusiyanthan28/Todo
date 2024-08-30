import React,{useState} from 'react'
import './TaskForm.css'
import Tag from './Tag'

const TaskForm = ({setTasks}) => {
  const [taskData, setTaskData] = useState({
    task:'',
    status:'todo',
    tags:[]
  })
  const checkTag = (tag) =>{
    return taskData.tags.some((item) => item ===tag)
  }

  const selectTag = (tag) => {
    if(taskData.tags.some (item => item === tag)) {
          const filterTags = taskData.tags.filter(item =>item === tag)
    setTaskData(prev => {
    return {...prev, tags: filterTags}
    })
    } 
    else {
          setTaskData(prev => {
           return {...prev, tags: [...prev.tags,tag]}
      })
        }
    };
    console.log(taskData.tags)
  const handleChange = (e) =>{
    const {name,value} = e.target
    // const name =e.target.name;
    // const value = e.target.value;

    setTaskData (prev =>{
      return{...prev, [name]: value}
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(taskData)
    setTasks(prev =>{
      return [...prev,taskData]
    })
    setTaskData(
      {
        task:'',
        status:'todo',
        tags:[]
      }
    )
  }

 
  // const [task, setTask] = useState('')
  // const [status, setstatus] = useState('todo')


  // const handleTaskChange = e =>{
  //   setTask(e.target.value)
  // }
  // const handleStatusChange = e =>{
  //   setstatus(e.target.value)
  // }
  // console.log(task , status)
  return (
    <header className='app_header'>
        <form  onSubmit={handleSubmit}>
            <input 
            type="text"
            value={taskData.task}  
            name='task'
            className='task_input' 
            placeholder='Enter your task'
            onChange={handleChange}
            />
            <div className='task_form_bottom_line'>
                <div>
                    <Tag tag_name="HTML" selectTag={selectTag} selected={checkTag("HTML")}/>
                    <Tag tag_name="CSS" selectTag={selectTag} selected={checkTag("CSS")}/>
                    <Tag tag_name="JS" selectTag={selectTag} selected={checkTag("JS")}/>
                    <Tag tag_name="React" selectTag={selectTag} selected={checkTag("React")}/>
   
                </div>


                <div>
                <select className='task_status'
                name='status'
                value={taskData.status}
                onChange={handleChange}>
                <option value='todo'>To do</option>
                <option value='doing'>Doing</option>
                <option value='done'>Done</option>
                </select>
                <button type='submit'className='task_submit'>+ Add Task
                </button>
                </div>

            </div>
        </form>
    </header>
  )
}

export default TaskForm