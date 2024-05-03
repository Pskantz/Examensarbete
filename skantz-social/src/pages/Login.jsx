import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>Enter your personal details and start journey with us</p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Sign Up</button>
          </Link>
        </div>

        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
          </form>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
