
import './App.css';
import React, { useState } from 'react';
import { Todoform } from './components/Todoform';
import { Head } from './components/Head';
import { Todolist } from './components/Todolist';

function App() {
  const [todolist,settodolist]=useState([""])
  const addTask=(userinput)=>{
    let copy=[...todolist]
    copy=[...copy,{id:Date.now(),task:userinput,status:false}]
    settodolist(copy)
  }
  const handletoggel=(id)=>{
    const updated_todo=todolist.map((item)=>{
      return item.id==id?{...item,status:!item.status}:{...item}
    })
    settodolist(updated_todo)
  }
  const handilFilter=()=>{
    const filteredtodo=todolist.filter((item)=>{
    
       return !item.status
     
    })
    settodolist(filteredtodo)
  }

  return (
    <div>
      <Head></Head>
      <Todoform addtask={addTask}></Todoform>
      <Todolist todolist={todolist} handletoggel={handletoggel} handilFilter={handilFilter}></Todolist>
    </div>
  );
}

export default App;
