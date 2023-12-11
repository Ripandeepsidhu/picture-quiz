import { NavLink,Link } from "react-router-dom";
import "./Header.css";
import React, { useState } from "react";
import "./Header.css";

const Header=()=>{
  const [menuOpen,setMenuOpen]= useState(false);


return(
    <>
   <nav>
   <Link className="title" to="/"> Quiz..</Link>
   <div className="menu" onClick={() =>
   setMenuOpen(!menuOpen)}>
   <span></span>
   <span></span>
   <span></span>
   </div>
   <ul className={menuOpen ? "open" : "" }>
      <li>
        <NavLink to="/register"> Register user</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log in</NavLink>
       </li>
    </ul>
    </nav>
    </>
    );


 };
 export default Header;