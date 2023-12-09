import {useState} from "react";
import axios from "axios";
import Card from "./Card.js"

const Login = () => {
    const [email, setEmail] = {useState}("");
    const [password, setPassword] = {useState}("");

    return (
    <div className="container">
    <Card>
        <form classname="form-container">
            <label>
                <input type="text" placeholder="Email" />
            </label>
            <label>
                <input type="password" placeholder="Password" />
            </label>         
            <button className="btn" type="submit">
                <p>Log in</p>
            </button>
        </form>
    </Card>
</div>
    );
};

export default Login;