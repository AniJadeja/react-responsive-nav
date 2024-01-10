import React from 'react'
import { NavLink } from "react-router-dom";
import './NavEntry.css'

const NavEntry = ({path,page}) => {
  return (
   <li>
      <NavLink
        to={path}
        className={({ isActive }) => {
          return isActive ? "activated" : "";
        }}
      >{page}</NavLink>
   </li>
  )
}

export default NavEntry