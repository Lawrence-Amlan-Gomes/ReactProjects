import { NavLink } from "react-router-dom";
import classes from "../Styles/Header.module.css";


export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.allWorks}>ALL PROJECTS</div>
      <div className={classes.header2}>
        <ul>
          <li className={classes.listStyle}>
            <NavLink to="/hello" className={(navInfo)=>(
              navInfo.isActive ? classes.active : classes.headerStyle)}>
              Home
            </NavLink>
          </li>
          <li className={classes.listStyle}>
            <NavLink to="/project1" className={(navInfo)=>(
              navInfo.isActive ? classes.active : classes.headerStyle)}>
              Project 1
            </NavLink>
          </li>
          <li className={classes.listStyle}>
            <NavLink to="/project2" className={(navInfo)=>(
              navInfo.isActive ? classes.active : classes.headerStyle)}>
              Project 2
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}