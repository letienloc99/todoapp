import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Todo({todo,toggleCommplete,deleteTodo,editTodo}) {


  return (
    <div className='Todo'>
        <p        
         onClick={()=>toggleCommplete(todo.id)}
         className={`${todo.completed?'completed':""}`}>
          {todo.todo}
         </p>
        <div>
            <FontAwesomeIcon onClick={()=>editTodo(todo.id)} icon={faPenToSquare}/>
            <FontAwesomeIcon onClick={()=>deleteTodo(todo.id)} icon={faTrash}/>
        </div>
    </div>
  )
}

export default Todo