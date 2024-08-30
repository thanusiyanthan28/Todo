import React from 'react'
import './TaskColumn.css'
import TaskCard from './TaskCard'

const TaskColumn = ({heading_name,icon,tasks,status,handleDelete}) => {
    
  return (
    <section className='task_colum'>
      <div className='task_colum_sub'>
        <h2 className='task_colum_heading'>
            <img className='task_colum_icon' src={icon} alt='todo'/>{heading_name}
        </h2>
      </div>
        {tasks.map((task ,index)=> task.status===status && 
        <TaskCard 
        key={index} 
        title={task.task} 
        tags={task.tags}
        handleDelete={handleDelete}
        index={index}
        />)}
    </section>
    
  )
}

export default TaskColumn