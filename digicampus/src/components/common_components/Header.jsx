import React from "react";
import "./Header.css"; // Importing CSS file

const Header = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Login", href: "/register" },
    { name: "Contact Us", href: "/contact" },
    { name: "Sign Up", href: "/Signup" },
  ];

  return (
    <nav className="custom-header">
      {/* Left Side - Title */}
      <a className="navbar-brand">StudentAcademicHub</a>

      {/* Right Side - Navigation Links */}
      <ul className="nav">
        {navLinks.map((link, index) => (
          <li className="nav-item" key={index}>
            <a className="nav-link custom-btn" href={link.href}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
