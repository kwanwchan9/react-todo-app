import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList'

import './App.css'

const App = () => {
  const initialState = JSON.parse(localStorage.getItem('items') || [])
  const [input, setInput] = useState('')
  const [items, setItems] = useState(initialState)
  // { id: '', title: '', completed: false }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])
  
  return (
    <>
      <div className='container'>
        <div className='app-wrapper'>
          <div>
            <Header />
          </div>
          <div>
            <Form
              input={input}
              setInput={setInput}
              items={items}
              setItems={setItems}
            />
          </div>
          <div>
            <TodoList items={items} setItems={setItems} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
