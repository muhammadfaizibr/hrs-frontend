import React from "react";
import "../assets/css/FormStyles.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signup Successful!");
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="username"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="confirm-password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Enter your confirm password"
              required
            />
          </div>
          <button type="submit" className="form-button">
            Signup
          </button>
        </form>
        <p className="register-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
