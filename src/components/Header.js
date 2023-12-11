
import { Link } from "react-router-dom";
import "./Header.css";

const Header=()=>{
return( <nav>
    <ul>
    <li>
       <Link to="/"> Quiz..</Link>
    </li>
    <li>
       <Link to="/Register">Register user</Link>
    </li>
    <li>
        <Link to="/Login">Log in</Link>
    </li>
    </ul>
    </nav>)
 }
 export default Header;