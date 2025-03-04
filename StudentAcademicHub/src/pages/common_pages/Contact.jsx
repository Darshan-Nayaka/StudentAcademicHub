"use client";

import { useState } from "react";
import {
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
} from "react-icons/fa";
import "./Register.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    studentStaffName: "",
    lastName: "",
    department: "",
    collegeEmail: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "studentStaffName" ? value.trim() : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentStaffName || !formData.collegeEmail || !formData.phoneNumber || !formData.message || !formData.department) {
      alert("Please fill in all required fields.");
      return;
    }
    alert("Message sent successfully!");
    setFormData({
      studentStaffName: "",
      lastName: "",
      department: "",
      collegeEmail: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <p id="heading">Contact Us</p>
        <div className="field">
          <FaUser className="input-icon" />
          <input name="studentStaffName" type="text" placeholder="Student/Staff Name *" value={formData.studentStaffName} onChange={handleChange} className="input-field" />
        </div>
        <div className="field">
          <FaBuilding className="input-icon" />
          <input name="department" type="text" placeholder="Department *" value={formData.department} onChange={handleChange} className="input-field" />
        </div>
        <div className="field">
          <FaEnvelope className="input-icon" />
          <input name="collegeEmail" type="email" placeholder="College Email *" value={formData.collegeEmail} onChange={handleChange} className="input-field" />
        </div>
        <div className="field">
          <FaPhone className="input-icon" />
          <input name="phoneNumber" type="text" placeholder="Phone Number *" value={formData.phoneNumber} onChange={handleChange} className="input-field" />
        </div>
        <div className="field">
          <FaCommentDots className="input-icon" />
          <textarea name="message" placeholder="Message *" rows={4} value={formData.message} onChange={handleChange} className="input-field"></textarea>
        </div>
        <div className="btn">
          <button type="submit" className="button1">Send Message</button>
        </div>
      </form>
    </div>
  );
}