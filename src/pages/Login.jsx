import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check empty fields
    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }

    // Get registered user
    const registeredUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    // If user is not registered
    if (!registeredUser) {
      alert("Please register first!");
      navigate("/register");
      return;
    }

    // Check email and password
    if (
      email === registeredUser.email &&
      password === registeredUser.password
    ) {
      // Save logged-in user
      localStorage.setItem("currentUser", email);

      alert("Login Successful!");

      // Go to Vote page
      navigate("/vote");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="form-page">
      <div className="form-box">

        <h1>🔐 Login</h1>

        <p className="subtitle">
          Login to cast your vote
        </p>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">
            Login
          </button>

        </form>

        <p className="register-link">
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;