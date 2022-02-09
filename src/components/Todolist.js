import React from 'react'
import './Todo'
import { Todo } from './Todo'

export const Todolist = ({todolist,handletoggel,handilFilter}) => {
    
    return (
        <div>
            {
                todolist.map((item)=>{
                    return(
                       <Todo item={item} handletoggel={handletoggel} handilFilter={handilFilter}></Todo>
                    )
                })
            }
            <button onClick={handilFilter}>clear completed task</button>
            
          
        </div>
    )
}
