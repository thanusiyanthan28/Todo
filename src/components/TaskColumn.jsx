import React from 'react'
import './TaskColumn.css'
import TaskCard from './TaskCard'
import DropArea from './DropArea'

const TaskColumn = ({heading_name,icon,tasks,status,handleDelete,setActiveCard,onDrop}) => {
    
  return (
    <section className='task_colum'>
      <div className='task_colum_sub'>
        <h2 className='task_colum_heading'>
            <img className='task_colum_icon' src={icon} alt='todo'/>{heading_name}
        </h2>
      </div>
      <DropArea onDrop={()=> onDrop(status, 0)}/>
        {tasks.map((task ,index)=> task.status===status && (
          <React.Fragment key={index} >
        <TaskCard 
        
        title={task.task} 
        tags={task.tags}
        handleDelete={handleDelete}
        index={index}
        setActiveCard={setActiveCard}
        />
        <DropArea onDrop={()=> onDrop(status,index+1)}/>
        </React.Fragment>
        )
        )}
    </section>
    
  )
}

export default TaskColumn