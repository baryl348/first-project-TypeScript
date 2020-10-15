import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../IMG/ts.png'
import style from './nav.module.css'

export const Navbar:React.FC = () =>{
    return(<nav>
    <div className="nav-wrapper indigo darken-4 px1">
      <a href="#!" className="brand-logo center"><img src={logo} alt='logo' className={style.logo}></img></a>
      <ul className="left hide-on-med-and-down blue darken-2 ">
        <li><NavLink to='/' >Список дел</NavLink></li>
        <li><NavLink to='/info' >Информация</NavLink></li>
        {/* <li className="active"><a href="collapsible.html">JavaScript and Type</a></li> */}
      </ul>
    </div>
  </nav>)

}