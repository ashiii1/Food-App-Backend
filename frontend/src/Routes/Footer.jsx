import React from "react";
import "./Footer.css";
import { FaFacebook, FaTruck } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div
    id="footer">
      <div style={{ width: "30%", marginLeft: "20%" }}>
        <h4>ABOUT US</h4>
        <p>
          ‘The Street Bites’s is additionally home of the amazing
          Burgers,Sandwich,Pizzas, Pasta, Fried & Grilled
          Chicken,Wrappers,Biryani and Milkshakes.
        </p>
        <div style={{ display: "flex", marginTop: "15px", gap: "7px" }}>
          <FaFacebook size={32} color="#4e6a94" />
          <FaInstagram size={32} color="#C13584" />
          
        </div>
        <p style={{color:"#ff5000", fontSize:"medium",marginTop:"5px", fontWeight:"600"}}>Subscribe to our social networks so as not to miss
interesting events and discounts!</p>
      </div>
      <div style={{ width: "50%" }}>
        <h4>HAVE A QUESTIONS?</h4>

        <div
          style={{ display: "flex", alignItems: "center", marginTop: "30px" }}
        >
          <FaMapMarkerAlt size={24} color="white" opacity=".9" />
          <span style={{ marginLeft: "10px" }}>
            1234 Elm Street, City, Country
          </span>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "25px" }}
        >
          <FaPhone size={24} color="white" opacity=".9" />
          <span style={{ marginLeft: "10px" }}>+1 (123) 456-7890</span>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "25px" }}
        >
          <FaEnvelope size={24} color="white" opacity=".9" />
          <span style={{ marginLeft: "10px" }}>contact@example.com</span>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "15px" }}
        >
          <FaTruck
            size={24}
            color="white"
            opacity=".9"
            style={{ transform: "scaleX(-1) rotate(0deg)" }}
          />
          <span style={{ marginLeft: "10px" }}>+38 (063) 987-45-615</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
