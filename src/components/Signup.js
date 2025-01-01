import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa"; // Importing icons
import "../assets/css/FormStyles.css"; // Linking to the CSS for styling

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="input-group">
            <FaUserAlt className="input-icon" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-btn">
            Sign Up
          </button>

          {/* Login Link */}
          <p className="signup-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
