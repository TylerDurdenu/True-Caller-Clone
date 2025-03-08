import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import Register from "./register";

function NavBar() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);


  const handleAccountChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "login") {
      setIsLoginPopupOpen(true);
      setIsRegisterPopupOpen(false)
    } else if (selectedValue === "register") {
      setIsRegisterPopupOpen(true);
      setIsLoginPopupOpen(false)
    }
    event.target.value = ""; 
  };

  const handleCloseLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };

  const handleCloseRegisterPopup = () => {
    setIsRegisterPopupOpen(false);
  };

  return (
    <div>
      <nav className="navBar">
        <ul>
          <li>
            <Link to="/">TrueCaller</Link>
          </li>
          <li className="dropdown">
            <select  onChange={handleAccountChange}>
              <option value="">Sign in</option>
              <option value="login">Login</option>
              <option value="register">Sign Up</option>
            </select>
          </li>
          <a href="">
            <button className="dwnBtn">Download</button>
          </a>
        </ul>
      </nav>
      {isLoginPopupOpen && (
        <div className="popup">
          <button className="close-popup" onClick={handleCloseLoginPopup}>
            X
          </button>
          <Login onClose={handleCloseLoginPopup} />
        </div>
      )}
      {isRegisterPopupOpen && (
        <div className="popup">
          <button className="register-close-popup" onClick={handleCloseRegisterPopup}>
            X
          </button>
          <Register onClose={handleCloseRegisterPopup} />
        </div>
      )}
    </div>
  );
}

export default NavBar;