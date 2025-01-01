import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import "../assets/css/header.css"; // Add the CSS file for styles
import { FaCartPlus, FaUserAlt, FaBars, FaTimes } from "react-icons/fa"; // Include the Hamburger icon

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const cartItems = useSelector((store) => store.cart.items);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="logo" />
        </Link>
      </div>

      <div className={`nav-items ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li className="cart-link">
            <Link to="cart">
              <FaCartPlus /> Cart ({cartItems.length})
            </Link>
          </li>
          <li>
            <Link to="/login">
              <button className="login">{btnNameReact}</button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Ternary operator for Hamburger and Close icons */}
      <div
        className={isMenuOpen ? "close-menu" : "hamburger"}
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Header;
