import React, { useEffect, useState } from 'react'
import { Form } from '../components/form/form'
import { List } from '../components/list/List'
import { ITodo } from '../components/utils/interface'

declare var confirm:(question:string) =>boolean

export const Pages:React.FC = () =>{
    const [todo,setTodo]=useState<ITodo[]>([])

    useEffect(()=>{
      const save =JSON.parse(localStorage.getItem('todo')|| '[]') as ITodo[]
    setTodo(save)
    },[])
  
    useEffect(()=>{localStorage.setItem('todo',JSON.stringify(todo))},[todo])
  
  const addHandler = (title:string) =>{
    console.log('title',title)
    const newTodo:ITodo = {
      title:title,
      id:Date.now(),
      completed:false
    }
    // setTodo([newTodo, ...todo])
    setTodo(prev =>[newTodo, ...prev])
  }
  
   const handler = (id:number) =>{
  setTodo(prev =>prev.map(todos =>{
    if (todos.id===id){
      todos.completed = !todos.completed
    }
    return todos
  }))
   }
   const remove = (id:number) =>{
      const confirmRemove = confirm('Уверенны что хотите удалить?')
      if(confirmRemove){setTodo(prev => prev.filter(todos => todos.id !== id))}
  
   }

    return <> <Form  onAdd={addHandler} /> 
    {/* <Route to='/info' render={()=><Info />} /> */}
    <List todo={todo} onHandler={handler} onRemove={remove}/> </>
}