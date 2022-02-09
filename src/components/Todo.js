import React from 'react'
import './Todo.css'

export const Todo = ({item,handletoggel}) => {
    const handlesubmit=(e)=>{
        e.preventDefault()
        handletoggel(e.currentTarget.id)


    }
    return (
        <div>
            <p onClick={handlesubmit} className={item.status?"strike":"no_strike"} id={item.id}>{item.task}</p>
            
        </div>
    )
}
