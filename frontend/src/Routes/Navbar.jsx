import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import "./Navbar.css";
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import flag from "../Images/flag.png";
import styled from "styled-components";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import BACKEND_API from "../API/api";
import { useSelector } from "react-redux";

const NAV = styled.div`
  #hamBug {
    display: none;
  }
  #flag-image {
    width: 100px;
    height: 77px;
    margin: 10px 0 0 -13px;
  }

  @media (max-width: 768px) {
    .link {
      display: none;
    }
    #hamBug {
      display: block;
    }
    #image-logo {
      width: 100px;
    }
    #flag-image {
      width: 70px;
      height: 57px;
    }
  }
`;
const Navbar = () => {
  const navigate = useNavigate();
  const [showHam, setShowHam] = useState(false);
  const [showProfile, setShowprofile] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated, getIdTokenClaims } =
    useAuth0();

   const cartItems= useSelector((store)=>store.cartReducer.cartItems);

// console.log(cartItems)
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          if (isAuthenticated && user) {
            const response = await axios.post(`${BACKEND_API}/user/auth`, {
              name: user.name,
              email: user.email,
              picture: user.picture,
            });
            
            console.log(response ? "user-response-successful" : "user-response-fail");
          }
        } catch (error) {
          console.error("Error fetching user data:", error.message);
        }
      };
    
  
      fetchUserData();
    }, [isAuthenticated, user, getIdTokenClaims]);
  



  return (
    <NAV>
      <div
        className="navbar"
        style={{
          display: "flex",
          width: "100%",
          // position: "sticky",
          // zIndex:"1",
          // top:"0px",
          backgroundColor: "#121618",
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginLeft: "10%", display: "flex" }}>
          <NavLink to={"/"}>
            <img id="image-logo" src={logo} alt="Logo" />
          </NavLink>
          <img id="flag-image" src={flag} alt="imgError" />
        </div>
        <div
          id="section"
          style={{
            width: "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginRight: "10%",
          }}
        >
          <NavLink className="link"  
          style={({ isActive }) => ({
              color: isActive ? "#ffd12e" : "white",
            })}
              to="/">
            Home
          </NavLink>

          <NavLink
            className="link"
            style={({ isActive }) => ({
              color: isActive ? "#ffd12e" : "white",
            })}
            to="/menucard"
          >
            Menu
          </NavLink>

          <NavLink className="link"
           style={({ isActive }) => ({
            color: isActive ? "#ffd12e" : "white",
          })}
          to="/about">
            About Us
          </NavLink>

          <NavLink
            className="link"
            style={({ isActive }) => ({
              color: isActive ? "#ffd12e" : "white",
            })}
            to="/contact"
          >
            Contact Us
          </NavLink>

          <div style={{ position: "relative" }}>
            <Tooltip
              label={`Total Items: ${
                cartItems.length > 0 ? cartItems.length : 0
              }`}
              placement="top"
            >
              <IconButton
                aria-label="Cart"
                icon={<AiOutlineShoppingCart />}
                onClick={() => navigate("/cart")}
                colorScheme="yellow" // Customize the color as needed
                variant="outline" // You can use "solid" for a filled icon
              />
            </Tooltip>
            <div
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                backgroundColor: "#ab6d1b",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
              }}
            >
              {cartItems.length > 0 ? cartItems.length  : 0}
            </div>
          </div>

      {/* LOGIN */}

          <div>
            {isAuthenticated ? (
              <button
                id="sign"
                style={{
                
                  backgroundColor: "#ab6d1b",
                  borderRadius: "50%",
                  color: "white",
                
                  fontWeight: "700",
                }}
                onClick={() => setShowprofile((prev) => !prev)}
              >
           
                <img style={{ width: "40px", borderRadius:"10px" }} src={user.picture} alt="imag" />
              </button>
            ) : (
              <button
                id="sign"
                style={{
                  width: "80px",
                  height: "35px",
                  backgroundColor: "#ab6d1b",
                  color: "white",
                  borderRadius: "15px",
                  fontWeight: "700",
                }}
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            )}
            {showProfile && (
              <div
                style={{
                  position: "absolute",
                  top: "100px",
                  right: "-45px",
                  width: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "space-around",
                  marginRight: "15%",
                  color: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust the last value (alpha) for transparency
                  zIndex: "1",
                }}
              >
                <ul
                  style={{
                    listStyleType: "none",
                    textAlign: "center",
                    padding: "5px",
                   
                  }}
                >
                  <li>{user?.name}</li>
                  <li>
                    <button
                    style={{ fontWeight:"600"}}
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

        

      {/* Hamburger responsive */}

          {showHam ? (
            <RxCross2
              size={"35px"}
              color={"white"}
              onClick={() => setShowHam(!showHam)}
            />
          ) : (
            <RxHamburgerMenu
              id="hamBug"
              size={"35px"}
              color={"white"}
              onClick={() => setShowHam(!showHam)}
            />
          )}
        </div>
      </div>
      {showHam && (
        <div
          style={{
            position: "absolute",
            right: "28px",
            width: "20%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            justifyContent: "space-around",
            marginRight: "15%",
            color: "white",
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust the last value (alpha) for transparency
            zIndex: "1",
          }}
        >
          <NavLink
            activeStyle={{ color: "yellow" }}
            to="/"
            onClick={() => setShowHam(false)}
          >
            Home
          </NavLink>

          <NavLink
            activeStyle={{ color: "red" }}
            to="/menucard"
            onClick={() => setShowHam(false)}
          >
            Menu
          </NavLink>

          <NavLink
            activeStyle={{ color: "red" }}
            to="/about"
            onClick={() => setShowHam(false)}
          >
            About Us
          </NavLink>

          <NavLink
            activeStyle={{ color: "#ffd12e" }}
            to="/contact"
            onClick={() => setShowHam(false)}
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </NAV>
  );
};

// alignItems: 'center', justifyContent: 'space-around'
export default Navbar;
