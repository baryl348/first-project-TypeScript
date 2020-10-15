import { type } from 'os'
import React from 'react'
import { ITodo } from '../utils/interface'

type listProps = {
    todo:ITodo[]
    onHandler:(id:number) => void
    onRemove:(id:number) => void
}

export const List: React.FC<listProps> = ({todo, onHandler, onRemove,}) =>{
    
    if (todo.length===0){
        return <p className='center'>Здесь пока пусто</p>
    }

    const remove = (e:React.MouseEvent, id:number)=>{
        e.preventDefault()
        onRemove(id)
    }
    
    return <ul>
        {todo.map((todos)=>{
            const classes = ['todo']
            if (todos.completed){
                classes.push('completed')
            }
            return (<li className={classes.join(' ')}key={todos.id}>
            <label>
            <input type="checkbox" checked={todos.completed} onChange={onHandler.bind(null, todos.id)}/>
        <span>{todos.title}</span>
            <i className='material-icons red-text' onClick={e=>remove(e,todos.id)}>delete</i>
            </label>
        </li>)
        })}
        
    </ul>
}