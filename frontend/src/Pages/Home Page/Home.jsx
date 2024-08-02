import React, { useState, useEffect, memo  } from "react";
import "./Home.css";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/card";
import home2 from "../../Images/home2.png";
import { FaPhone } from "react-icons/fa";
import bg1 from "../../Images/bg_1.png"
import bg2 from "../../Images/bg_2.png"
import DishSlider from "../../Components/Slider/DishSlider";
import { useDispatch, useSelector } from "react-redux";
import { getMenus } from "../../Redux/GetMenu/action";
import { getCartItem } from "../../Redux/Cart/action";
import { useAuth0 } from "@auth0/auth0-react";
const Home = () => {
  const dispatch= useDispatch()
  const {  user} =
    useAuth0();
  const menus =  useSelector((store)=>store.menuReducer.menus)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const images = [bg1, bg2];
  
  
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);
  
  useEffect(()=>{
    dispatch(getMenus())
    dispatch(getCartItem(user))
  },[user])
  
  // console.log("menus_ome", menus)

  
  return (
    <div className="container">
      
      <div
        className="sliding_div"
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <div
        className="slide-box1"
          style={{
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap:"40px",
            opacity: currentImageIndex % 2 === 0 ? 1 : 0,
          }}
        >
          {/* image */}
          <div style={{display:'flex', alignItems:"center"}}>
            <img
              src={images[currentImageIndex]}
              alt="slide"
              style={{
                width: "450px",
                objectFit: "cover",
              }}
            />
          </div>
          <div style={{ color: "white", height:"195px",width:"220px"  }}>
            <h1
              style={{
                fontFamily: "Nothing You Could Do, cursive",
                color: "#fac564",
                margin:"0 0 15px 0"
              }}
            >
              Delicious
            </h1>
            <h1>BURGERS</h1>
            <p style={{margin:"15px 0 25px 0", opacity:"1"}}>Tasty Amazing Burgers</p>
            <Button
              btnText={"View Menu"}
              buttonClick={() => navigate("/menucard")}
            />
          </div>
        </div>

        <div
          className="slide-box2"
          style={{
            // border: "2px solid green",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: currentImageIndex % 2 === 0 ? 0 : 1,
          }}
        >
          <div id="crunchy" style={{ height:"200px",width:"220px",marginTop: "20px", color: "white",  }}>
            <h1 style={{ color: "#fac564", margin:"0 0 15px 0" }}>Crunchy</h1>
            <h1>PIZZA'S</h1>
            <p style={{ margin:"15px 0 25px 0",opacity:"1"}}>Tasty Amazing Pizza's</p>
            <Button
              btnText={"View Menu"}
              buttonClick={() => navigate("/menucard")}
            />
          </div>
          {/* image */}
          <div style={{display:'flex', alignItems:"center"}}>
            <img
              src={images[currentImageIndex]}
              alt="slide"
              style={{
                width: "490px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          fontWeight: "650",
          fontFamily: "algerian",
          fontSize: "37px",   
          marginTop:"-40px"      
        }}
      >
        Our Menu
      </div>
      <div>
        <MemoizedCard />
      </div>

        {/* Dish Slider */}
      <>
        <MemoizedDishSlider data={menus}/>
      </>


        {/* Display Image */}
      <div
        style={{ marginTop: "20px", boxShadow: "white 0px 20px 30px -10px" }}
      >
        <img src={home2} alt="Dishes" />
      </div>
      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <h1 style={{ fontSize: "30px" }}>Contact Us for Home Delivery</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "15px",
            justifyContent: "center",
            fontSize: "30px",
          }}
        >
          <FaPhone size={24} color="white" opacity=".9" />
          <span style={{ marginLeft: "10px" }}>+1 (123) 456-7890</span>
        </div>
      </div>
    </div>
  );
};

const MemoizedCard = memo(Card);
const MemoizedDishSlider = memo(DishSlider);

export default Home;
