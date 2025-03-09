import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Logout } from "../services/authServices";

function NavBar() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [navBackground, setNavBackground] = useState("transparent-nav");

  const location = useLocation();
  const isHomePage = location.pathname == '/';
  useEffect(() => {
    if (!isHomePage){
      setNavBackground("white-nav")
    }
      

    const handleScroll = () => {
      const homeImgHeight = document.querySelector(".homeImg")?.offsetHeight || 0;
      if (window.scrollY > homeImgHeight) {
        setNavBackground("white-nav");
      } else {
        setNavBackground("transparent-nav");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  
  
  const handleAccountChange = async (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "login") {
      setIsLoginPopupOpen(true);
      setIsRegisterPopupOpen(false)
    } else if (selectedValue === "register") {
      setIsRegisterPopupOpen(true);
      setIsLoginPopupOpen(false)
    }else if(selectedValue ==="logout") {
      const response = await Logout()
      alert(await response);
      window.location.href="/";
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
      <nav className={`navBar ${navBackground}`}>
        <ul>
          <li>
            <Link to="/">TrueCaller</Link>
          </li>
          <li className="dropdown">
            <select  onChange={handleAccountChange}>
              <option value="">Sign in</option>
              <option value="login">Login</option>
              <option value="register">Sign Up</option>
              <option value="logout">Logout</option>
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