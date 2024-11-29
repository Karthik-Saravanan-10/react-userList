import { NavLink } from "react-router-dom";
import style from "./Back.module.css";

function Head() {
  return (
    <>
      <header>
        <ul>
          <NavLink to="form">
            <li>Form</li>
          </NavLink>
          <NavLink to="/">
            <li>Users</li>
          </NavLink>
        </ul>
      </header>
    </>
  );
}

export default Head;
