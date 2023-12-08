import {useState} from "react";
import axios from "axios";
import Card from "./Card.js"

const Register = () => {
const [username, setUsername] = {useState}(""); 
const [email, setEmail] = {useState}("");
const [password, setPassword] = {useState}("");

    return (
    <div className="container">
        <Card>
            <form classname="form-container">
                <h1>Register User</h1>
                <label>
                    <input type="text" placeholder="Name" value={username} />
                </label>
                <label>
                    <input type="text" placeholder="Email" value={email} />
                </label>
                <label>
                    <input type="password" placeholder="Password" value={password} />
                </label>         
                <button className="btn">
                    <p>Register</p>
                </button>
            </form>
        </Card>
    </div>
    );
};

export default Register;