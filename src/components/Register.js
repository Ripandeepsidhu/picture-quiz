import { useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./Form.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  let user
  const checkEmail = (users) => {
   user = users.find((user) => user.email === email);     
     return user;
   };

  const handleSubmit = async () => {
     const newUser = { username, email, password };
      const userList = await axios
      .get("/users")
      .then((res) => res.data);
    checkEmail(userList)
      if (user) {
      alert("User already exist!");
    } else {
      // const user = { username, email, password };
      axios.post("/users", newUser).then(alert("User created!"));
  };
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

