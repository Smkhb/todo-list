import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleFill } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTodo, removeTodo, updatedTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    updatedTodo(edit.id, value)
    setEdit({
      id:null,
      value: ''
    });
  }

  if(edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div
      className={
        todo.isComplete
          ? 'todo-row complete'
          : 'todo-row'
      }
      key={index}
    >

      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div>
        <RiCloseCircleFill
          onClick={() => removeTodo(todo.id)} />
        <TiEdit
          onClick={()=> setEdit({id:todo.id,value:todo.text})}
        />
      </div>
    </div>
  ))
}

export default Todo