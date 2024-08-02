import React from "react";
import "./Contact.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container" style={{ display: "flex", gap:"30px" }}>
      <div style={{ width: "30%", marginLeft: "10%" }}>
        <h1 style={{ fontSize: "23px", marginBottom: "25px" }}>
          Contact Information
        </h1>
        <span style={{ color: "white", opacity: "1.5", fontSize: "20px" }}>
          Address:{" "}
        </span>
        <span>
          Beside Bank Of Baroda,D.R.S Complex, R.S Road,Rajampeta,Andhra
          Pradesh-India.
        </span>
        <br />
        <h1 style={{ marginTop: "25px" }}>
          <span style={{ color: "#ffd12e", opacity: ".9" }}>Phone:</span>{" "}
          <span>+91-9876543210</span>
        </h1>
        <h1 style={{ marginTop: "25px" }}>
          <span style={{ color: "#ffd12e", opacity: ".9" }}>Email:</span>{" "}
          <span>thestreet@bites.gmail.com</span>
        </h1>
      </div>

      <div style={{ width: "50%" }}>
        <h1 style={{ fontSize: "30px" }}>Any queries Whatsapp us ?</h1>
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "25px",
            fontSize: "30px",
          }}
        >
          <FaWhatsapp size={30} color="green" style={{ marginTop: "9px" }} />
          <span>+91-987654321</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
