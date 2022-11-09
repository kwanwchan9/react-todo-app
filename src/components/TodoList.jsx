import React, { useState } from 'react'
import TodoItems from './TodoItems'
import EditTodo from './EditTodo'

const TodoList = ({ items, setItems }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [updateItem, setUpdateItem] = useState(null)

  return (
    <>
      {isEdit ? (
        <EditTodo
          items={items}
          setItems={setItems}
          setIsEdit={setIsEdit}
          updateItem={updateItem}
          setUpdateItem={setUpdateItem}
        />
      ) : (
        <TodoItems
          items={items}
          setItems={setItems}
          setIsEdit={setIsEdit}
          setUpdateItem={setUpdateItem}
        />
      )}
    </>
  )
}

export default TodoList
