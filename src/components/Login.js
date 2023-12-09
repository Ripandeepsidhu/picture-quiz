import {useState} from "react";
import axios from "axios";
import Card from "./Card.js"

const Login = () => {
    const [email, setEmail] = {useState}("");
    const [password, setPassword] = {useState}("");

    const checkUser = (users) => {
        const user = users.find(
            (user) => user.email === email && user.password === password);
        if (user.email === email && user.password === password) return user;
    };

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