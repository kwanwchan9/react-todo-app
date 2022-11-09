import React, { useEffect, useState } from 'react'

const Form = ({ input, setInput, items, setItems }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!input || /^\s*$/.test(input)) {
      setInput('')
      return
    }

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
      <form className='d-flex mt-2' onSubmit={handleSubmit}>
        <input
          type='text'
          size={25}
          placeholder=' + New task...'
          value={input}
          className='form-control form-control-lg'
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='btn btn-warning ms-2' type='submit'>
          ADD
        </button>
      </form>
    </>
  )
}

export default Form
