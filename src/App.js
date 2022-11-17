import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const App = () => {
  // let initialState = []
  // if (localStorage.getItem('todo-items')) {
  //   initialState = JSON.parse(localStorage.getItem('todo-items'))
  // }

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(
    localStorage.getItem('todo-items')
      ? JSON.parse(localStorage.getItem('todo-items'))
      : []
  )
  // items = [{ id: '', title: '', isComplete: false]

  useEffect(() => {
    localStorage.setItem('todo-items', JSON.stringify(todos))
  }, [todos])
  return (
    <>
      <div className='container d-flex justify-content-center vh-100 vw-100'>
        <div className='d-flex flex-column align-items-center mt-5'>
          <Header />
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  )
}

export default App
