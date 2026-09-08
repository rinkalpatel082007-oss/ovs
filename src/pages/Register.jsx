import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Check empty fields
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    // Check password
    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    // Check password length
    if (password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    // Save registered user
    const user = {
      name: name,
      email: email,
      password: password,
    };

    localStorage.setItem(
      "registeredUser",
      JSON.stringify(user)
    );

    alert("Registration Successful!");

    // Go to login page
    navigate("/");
  };

  return (
    <div className="form-page">
      <div className="form-box">

        <h1>📝 Register</h1>

        <p className="subtitle">
          Create your account to vote
        </p>

        <form onSubmit={handleRegister}>

          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
            />
          </div>

          <button type="submit">
            Register
          </button>

        </form>

        <p className="register-link">
          Already have an account?{" "}
          <Link to="/">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;