import React, { useState } from 'react'
import TodoItems from './TodoItems'
import EditTodo from './EditTodo'

const TodoList = ({ todos, setTodos }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [updateItem, setUpdateItem] = useState(null)

  return (
    <>
      {isEdit ? (
        <EditTodo
          todos={todos}
          setTodos={setTodos}
          setIsEdit={setIsEdit}
          updateItem={updateItem}
          setUpdateItem={setUpdateItem}
        />
      ) : (
        <TodoItems
          todos={todos}
          setTodos={setTodos}
          setIsEdit={setIsEdit}
          setUpdateItem={setUpdateItem}
        />
      )}
    </>
  )
}

export default TodoList
