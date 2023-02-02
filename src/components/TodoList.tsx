import React from 'react'

type TodoListProps  = {
  items: {id: string,text:string }[]
}

const TodoList = ({items}: TodoListProps) => {
  return (
    <ul>
      {items.map((item) => <li key={item.id}>{item.text}</li>)}
    </ul>
    
  )
}

export default TodoList