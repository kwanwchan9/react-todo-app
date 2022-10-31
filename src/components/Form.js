import React, { useEffect, useState } from 'react'

const Form = ({ input, setInput, items, setItems }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input || /^\s*$/.test(input)) {
      setInput('')
      return
    }
    // const newItem = {
    //   id: Math.floor(Math.random() * 100000),
    //   title: e.value,
    //   isComplete: false,
    // }
    // setItems([...items, newItem])
    setItems([
      ...items,
      {
        id: Math.floor(Math.random() * 1000000),
        title: input,
        isComplete: false,
      },
    ])
    setInput('')
  }

  return (
    <>
      <form className='add-todo' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder=' + New task...'
          value={input}
          className='form-input'
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='form-submit-button' type='submit'>
          ADD
        </button>
      </form>
    </>
  )
}

export default Form
