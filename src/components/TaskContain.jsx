import React from 'react'
import TodoTask from './TodoTask'

const TaskContain = ({tasks, handleDelete}) => {

    const taskList = tasks.map(item => <TodoTask 
      key={item.id} 
      item={item}
      handleDelete={handleDelete}
    />)

  return (
    <main>{taskList}</main>
  )
}

export default TaskContain;
