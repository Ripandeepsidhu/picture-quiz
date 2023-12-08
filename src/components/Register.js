import Card from "./Card.js"
const Register = () => {
    return (
    <div className="container">
        <Card>
            <form classname="form-container">
                <h1>Register User</h1>
                <label>
                    <input type="text" placeholder="Name" />
                </label>
                <label>
                    <input type="text" placeholder="Email" />
                </label>
                <label>
                    <input type="password" placeholder="Password" />
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