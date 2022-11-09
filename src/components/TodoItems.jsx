import React, { useState, useEffect } from 'react'

const TodoItems = ({ items, setItems, setIsEdit, setUpdateItem }) => {
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
    const findTodo = items.find((item) => item.id === id)
    setUpdateItem(findTodo)
    setIsEdit(true)
  }

  const handleDelete = (id) => {
    setItems(
      items.filter((item) => {
        return item.id !== id
      })
    )
  }

  const handleEmpty = () => {
    setItems([])
  }

  return (
    <>
      <div className='mt-4'>
        <ul className='list-group'>
          {items.map(({ id, title, isComplete }) => {
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
