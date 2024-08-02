import React from "react";
import { FaPhone } from "react-icons/fa";
import "./MenuCard.css";
import menu1 from "../../Images/menu1.png";
import menu2 from "../../Images/menu2.png";
import menu3 from "../../Images/menu3.png";
import menu4 from "../../Images/menu4.png";

// Menu Page for showing Menu Card
const MenuCard = () => {
  return (
    <div
      className="container"
      style={{
        textAlign: "center",
        fontSize: "30px",
        fontFamily: "Josefin Sans, Arial, sans-serif",
      }}
    >
      <h3 style={{ paddingTop: "30px" }}>Contact Us for Home Deliver</h3>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          justifyContent: "center",
          gap: "9px",
        }}
      >
        <FaPhone size={24} color="white" opacity=".7" />
        <h3>+91-9876543210</h3>
      </div>

      <h3 style={{ marginTop: "30px" }}>OUR MENU PRICING</h3>
      <div
        style={{
          width: "40%",
          margin: "auto",
          backgroundColor: "#fac564",
          height: "5px",
          marginBottom: "55px",
          marginTop: "10px",
        }}
      ></div>

        {/* menu cart items */}

      <div
        className="menuCard_Container"
        style={{
          // display: "grid",
          // gridTemplateColumns: "repeat(2,1fr)",
          justifyContent:"center",
          alignItems:"center",
          width: "70%",
          margin: "auto",
          gap: "30px",
          paddingBottom: "25px",
          marginBottom: "-10px",
        }}
      >
        <div
        className="image-div">
          <div
          className="image-box">
            <img
            className="menu-image"
              src={menu1}
              alt="menu"
            />
          </div>
        </div>

        <div
        className="image-div">
          <div
          className="image-box">
            <img
            className="menu-image"
              src={menu2}
              alt="menu"
            />
          </div>
        </div>
        <div
        className="image-div">
          <div
          className="image-box" >
            <img
            className="menu-image"
              src={menu3}
              alt="menu"
            />
          </div>
        </div>
        <div
        className="image-div">
          <div
          className="image-box">
            <img
            className="menu-image"
              src={menu4}
              alt="menu"
            />
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default MenuCard;
