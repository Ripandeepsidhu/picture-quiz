import React from "react";
 import { Link } from "react-router-dom";
import "./Header.css"
 const Header=()=>{
return( <nav>
 <Link className="title" to="/"> Quiz..</Link>
    <ul>
    <li>
       <Link to="/register"> Register user</Link>
    </li>
    <li>
        <Link to="/login">Log in</Link>
    </li>
    </ul>
    <i className="fas fa-toggle-on"></i>
    </nav>)
 }
 export default Header;