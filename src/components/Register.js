import { useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./Form.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*
  if you have problems in here and cant register a user
  first thing is to comment all the code out that is in the handle submit
  then grab this code:

    const user = { username, email, password };
    axios.post("/users", user).then(alert("User created!"));

    and paste that codee in the handleSubmit
    test again => if it works and a user gets saved in db.json
    then the problem might be in checkEmail or the other code in handle submit
  */

  const checkEmail = (users) => {
    const user = users.find((user) => user.email === email);
    if (user) return user;
  };

  const handleSubmit = async () => {
    const user = await axios
      .get("/users")
      .then((res) => checkEmail(res.data, email));

    if (user) {
      alert("User already exist!");
    } else {
      const user = { username, email, password };
      axios.post("/users", user).then(alert("User created!"));
    }
  };

  return (
    <div className="container">
      <Card>
        <form className="form-container">
          <h1>Register User</h1>
          <label>
            <input
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="btn" type="submit" onClick={handleSubmit}>
            <p>Register</p>
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Register;

/*
const [username, setUsername] = {useState}(""); 
const [email, setEmail] = {useState}("");
const [password, setPassword] = {useState}("");

const checkEmail = (users) => {
    const user = users.find((user) => user.email === email);
    if (user) return user;
};

const handleSubmit = async () => {
    const user = await axios
    .get("/users")
    .then((res) => checkEmail(res.data, email));

    if(user) {
        alert("User already exist!")
    } else {
        const user = {username, email, password};
        axios.post("/users", user).then(alert("User created!"));
    }
};

    return (
    <div className="container">
        <Card>
            <form classname="form-container">
                <h1>Register User</h1>
                <label>
                    <input 
                    type="text" 
                    placeholder="Name" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} />
                </label>
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
                type="submit" 
                onClick={handleSubmit}>
                    <p>Register</p>
                </button>
            </form>
        </Card>
    </div>
    );
*/
