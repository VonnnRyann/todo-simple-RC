import React from 'react'

const TodoTask = ({item, handleDelete}) => {


  return (
    <div>
      {item.task}
      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </div>
  )
}

export default TodoTask