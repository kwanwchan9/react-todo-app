import React, { useState } from 'react'

const TodoList = ({ items, setItems }) => {
  const [isComplete, setIsComplete] = useState(false)

  const handleComplete = (id) => {
    setItems(
      items.map((item) => {
        if (item.id == id) {
          return { ...item, isComplete: !item.isComplete }
        }
        return item
      })
    )
  }

  const handleEdit = (id) => {
    //   setItems(
    //     items.map((item) => {
    //       if (item.id == id) {
    //       }
    //     })
    //   )
  }

  const handleDelete = (id) => {
    console.log()
    setItems(
      items.filter((item) => {
        return item.id !== id
      })
    )
  }

  return (
    <>
      <div className='todo-items-container'>
        {items.map(({ id, title, isComplete }) => {
          return (
            <li className='list-item' key={id}>
              <button
                className='todo-button check-button'
                onClick={() => handleComplete(id)}
              >
                <i
                  className={
                    isComplete
                      ? 'fa-solid fa-circle-check checked'
                      : 'fa-regular fa-circle-check unchecked'
                  }
                ></i>
              </button>
              <input
                className={isComplete ? 'todo-item completed' : 'todo-item'}
                type='text'
                value={title}
                onChange={(e) => e.target.value}
              />

              <button
                className='todo-button edit-button'
                onClick={() => handleEdit(id)}
              >
                <i className='fa-regular fa-pen-to-square'></i>
              </button>
              <button
                className='todo-button delete-button'
                onClick={() => handleDelete(id)}
              >
                <i className='fa-regular fa-trash-can'></i>
              </button>
            </li>
          )
        })}
      </div>
    </>
  )
}

export default TodoList
