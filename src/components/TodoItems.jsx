import React, { useState } from 'react'

const TodoItems = ({ todos, setTodos, setIsEdit, setUpdateItem }) => {
  const handleComplete = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id == id) {
          return { ...item, isComplete: !item.isComplete }
        }
        return item
      })
    )
  }

  const handleEdit = (id) => {
    const findTodo = todos.find((item) => item.id === id)
    setUpdateItem(findTodo)
    setIsEdit(true)
  }

  const handleDelete = (id) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id
      })
    )
  }

  const handleEmpty = () => {
    setTodos([])
  }

  return (
    <>
      <div className='mt-4'>
        <ul className='list-group'>
          {todos.map(({ id, title, isComplete }) => {
            return (
              <li className='input-group mb-3' key={id}>
                <button
                  className='input-group-text'
                  onClick={() => handleComplete(id)}
                >
                  <i
                    className={
                      isComplete
                        ? 'bi bi-check-circle-fill'
                        : 'bi bi-check-circle'
                    }
                  ></i>
                </button>
                <input
                  className={
                    isComplete
                      ? 'form-control text-decoration-line-through'
                      : 'form-control'
                  }
                  type='text'
                  size={30}
                  value={title}
                  onChange={(e) => e.target.value}
                />

                <button
                  className='input-group-text'
                  onClick={() => handleEdit(id)}
                >
                  <i className='bi bi-pencil-square'></i>
                </button>
                <button
                  className='input-group-text'
                  onClick={() => handleDelete(id)}
                >
                  <i className='bi bi-trash'></i>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <button className='btn btn-primary' onClick={handleEmpty}>
        Clear All
      </button>
    </>
  )
}

export default TodoItems
