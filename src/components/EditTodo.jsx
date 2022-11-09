import React, { useState } from 'react'

const EditTodo = ({
  items,
  setItems,
  setIsEdit,
  updateItem,
  setUpdateItem,
}) => {
  const [editInput, setEditInput] = useState(updateItem.title)

  const handleUpdate = (e) => {
    e.preventDefault()
    if (!editInput || /^\s*$/.test(editInput)) {
      return
    }
    setItems(
      items.map((item) => {
        if (item.id == updateItem.id) {
          return { ...item, title: editInput }
        }
        return item
      })
    )
    setUpdateItem(null)
    setIsEdit(false)
  }

  const handleBack = () => {
    setIsEdit(false)
  }

  return (
    <div className='d-flex flex-column'>
      <form className='mt-4' onSubmit={handleUpdate}>
        <li className='input-group'>
          <input
            className={'form-control'}
            type='text'
            size={25}
            placeholder='Update your item'
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          />
          <button className='input-group-text'>
            <i className='bi bi-check-lg'></i>
          </button>
        </li>
      </form>
      <button className='btn btn-primary mt-4' onClick={handleBack}>
        Back
      </button>
    </div>
  )
}

export default EditTodo
