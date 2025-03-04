"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import "./Register.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    collegeEmail: "",
    password: "",
    recheckPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showRecheckPassword, setShowRecheckPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRecheckPasswordVisibility = () => {
    setShowRecheckPassword(!showRecheckPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.collegeEmail || !formData.password || !formData.recheckPassword) {
      alert("Please fill in all required fields.");
      return;
    }
    if (formData.password !== formData.recheckPassword) {
      alert("Passwords do not match.");
      return;
    }
    alert("Registration successful!");
    setFormData({ name: "", collegeEmail: "", password: "", recheckPassword: "" });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <p id="heading">Sign Up</p>
        <div className="field">
          <FaUser className="input-icon" />
          <input name="name" type="text" placeholder="Name *" value={formData.name} onChange={handleChange} className="input-field" />
        </div>
        <div className="field">
          <FaEnvelope className="input-icon" />
          <input name="collegeEmail" type="email" placeholder="College Email *" value={formData.collegeEmail} onChange={handleChange} className="input-field" />
        </div>
        <div className="field">
          <FaLock className="input-icon" />
          <input name="password" type={showPassword ? "text" : "password"} placeholder="Set Password *" value={formData.password} onChange={handleChange} className="input-field" />
        </div>
        <div className="field">
          <FaLock className="input-icon" />
          <input name="recheckPassword" type={showRecheckPassword ? "text" : "password"} placeholder="Recheck Password *" value={formData.recheckPassword} onChange={handleChange} className="input-field" />
          <span onClick={toggleRecheckPasswordVisibility} className="eye-icon" style={{ color: "white" }}>
            {showRecheckPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div className="btn">
          <button type="submit" className="button1">Register</button>
        </div>
      </form>
    </div>
  );
}
