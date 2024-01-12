import React from 'react'
import { NavLink } from "react-router-dom";
import './NavEntry.css'
import ListItemStyle from '../../models/ListItemStyleModel';

const NavEntry = ({ path, page, style }) => {

  let liStyle;

  style ? 
  ( liStyle = new ListItemStyle(style)) 
  : liStyle = {
    fontWeight: "bold",
    hoverColor: "red",
  }

  return (
    <li>
      <NavLink
        to={path}
        style={{ ...liStyle}}
        className={({ isActive }) => {
          console.log(path + " is active "+isActive);
          return 'listItem ' + (isActive ? "activated" : "notActivated");
        }}
      >{page}</NavLink>
    </li>
  )
}

export default NavEntry