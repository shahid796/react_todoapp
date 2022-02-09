import React, { useState } from 'react'

export const Todoform = ({addtask}) => {
    const [userinput,setuserinput]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        addtask(userinput)
        setuserinput("")


    }
    return (
        <div>
            <form>
                <input type="text" value={userinput} onChange={(e)=>{setuserinput(e.currentTarget.value)}} />
                <button onClick={handleSubmit}>add</button>
            </form>
        </div>
    )
}
