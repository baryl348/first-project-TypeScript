import React, { useRef, useState } from 'react'

interface TodoForm {
    onAdd(title:string):void
}

export const Form: React.FC<TodoForm> = (props) =>{
    
// 1й способ
//     const [title,setTitle]=useState<string>('')

// const changeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
//     setTitle(e.target.value)
// }

// const keyPressHandler =(e:React.KeyboardEvent)=>{
//     if (e.key ==='Enter'){
//         setTitle(' ')
//     }
// }
// ==================
const refs = useRef<HTMLInputElement>(null)

const keyPressHandler = (e:React.KeyboardEvent) =>{
    if (e.key === 'Enter'){
        console.log(props.onAdd)
      props.onAdd( refs.current!.value) 
        refs.current!.value=''}
}
    
    return ( <div className='container'><div className='input-field mt2' >
        <input 
       onKeyPress={keyPressHandler}
       //  onChange={changeHandler}
        //  value={title}
        ref={refs}
           type="text"
            id='title'
             placeholder='Введите название дела'></input>
        <label htmlFor="title" className='active'>Введите название дела</label>
    </div></div>)  
}