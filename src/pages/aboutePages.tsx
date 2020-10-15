import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage:React.FC = () => {
    const history = useHistory()
    return (<>
        <h1>Test</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima nihil earum voluptatibus eaque inventore eius voluptate soluta eos? Est eius obcaecati quo quae animi laboriosam quidem saepe officia quis provident!</p>
        <button className='btn' onClick={()=>history.push('/')} >Вернуться к списку</button>
        </>
    )
}