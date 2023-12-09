import { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import Card from "./Card.js"

const Login = () => {
    const [email, setEmail] = {useState}("");
    const [password, setPassword] = {useState}("");

    const navigate = useNavigate();

    const checkUser = (users) => {
        const user = users.find(
            (user) => user.email === email && user.password === password);
        if (user.email === email && user.password === password) return user;
    };

    const handleSubmit = async () => {
      e.preventDefault ();
      if (email === "" || password === "") {
        alert("All fields are required!");
      }

      const user = await axios
      .get("/users")
      .then((res) => checkUser(res.data, email, password))
      .catch((error) => {
        console.log(error);
      })
    }

    return (
    <div className="container">
    <Card>
        <form classname="form-container">
            <label>
                <input 
                type="text" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />
            </label>         
            <button 
            className="btn" 
            type="submit">
                <p>Log in</p>
            </button>
        </form>
    </Card>
</div>
    );
};

export default Login;