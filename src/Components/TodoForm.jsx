import React, { useState,useRef } from 'react'

function TodoForm({addTodo}) {
    const inputRef=useRef()
    const [value,setValue]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        addTodo(value)
        setValue('')
        inputRef.current.focus()
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <h1>Todo App</h1>
        <input 
        ref={inputRef}
        value={value} 
        onChange={(e)=>setValue(e.target.value)} 
        type='text' 
        placeholder='Nhập công việc....' 
        className='todo-input'/>
        <button type='submit' className='todo-btn'>Add</button>
    </form>
  )
}
export default TodoForm