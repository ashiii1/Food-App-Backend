import React, { useState } from "react";
import { Icon } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartModal from "./CartModal";

const DishCard = ({image,category,dishName,prices, details,rating}) => {
  const [isDisplay, setIsDisplay] = useState(true);
  const [isHovered, setIsHovered] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDisplay(false);
  };

  const handleMouseLeave= () => {
    setIsDisplay(true);
  };
  const handleMouseEnter2= () => {
    setIsHovered(true);
  };
  const handleMouseLeave2 = () => {
    setIsHovered(false);
  };

  return (
    <div
    className="scroll"
      style={{
        width: "270px",
        height: "280px",
        position: "relative",
        backgroundColor: "#010f29",
        marginTop:"70px",
        marginBottom:"10px",
        borderRadius:"15px"
      }}
      
    >
      <div
        className="dish_image"
        style={{
          display: isDisplay ? "block" : "none",
          width: "200px",
          height: "180px",
          margin: "auto",
          position: "absolute",
          top: "-50px",
          left: "35px",
          borderRadius: "100px",
        }}
      >
        <img
          style={{ borderRadius: "100px", width: "200px", height: "180px" }}
          src={image}
          alt={prices.halfPortion}
        />
      </div>
      <div
        className="dishName"
        style={{
          position: "static",
          marginTop: isDisplay ? "140px" : "20px",
          marginLeft: "15px",
          width: "240px",
          height: "130px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            position: "static",
            fontWeight: "bold",
            color: "#ffd12e",
            margin: "auto",
          }}
        >
          {category}
        </h3>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: "22px",
            color: "white",
            fontFamily: "cursive",
            marginTop: "5px",
          }}
        >
          {dishName}
        </h1>
        <h1
          style={{
            display: isDisplay ? "block" : "none",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "20px",
            color: "white",
            marginTop: "5px",
          }}
        >
         { `₹ ${prices.fullPortion}`}
        </h1>
        <div style={{display: isDisplay ? "none" : "block", width:"40%",margin:"auto", textAlign:"left", marginLeft:"36%",marginTop:"5px"}}>

        <h4 style={{ display: isDisplay ? "none" : "block"}} >Half: <span style={{opacity:"1", color:"#ffd12e"}}>{prices.halfPortion}  </span> </h4>

        <h4 style={{ display: isDisplay ? "none" : "block"}} >Full: <span style={{opacity:"1", color:"#ffd12e"}}>{prices.fullPortion}  </span> </h4>

        <h4 style={{ display: isDisplay ? "none" : "block"}} >Rating: <span style={{opacity:"1", color:"#ffd12e"}}>{rating}</span> </h4>
        </div>

       
      </div>
      {/* <button
        className="btn1"
        style={{
          width: "160px",
          height: "35px",
          position: "absolute",
          left: "60px",
          top: "262px",
          backgroundColor: isHovered ?"#ffd12e": "white",
          borderRadius: "15px",
          border:"2px solid #ffd12e",
          transition: "background-color 0.3s",
        }}
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={handleMouseEnter2 && handleMouseEnter}
        onMouseLeave={handleMouseLeave2 && handleMouseLeave}
      >
        <IconButton
          aria-label="Cart"
          icon={<AiOutlineShoppingCart />}
          colorScheme="blue"
          variant="soid"
          style={{ width: "12px", height: "28px", marginRight: "1px" }}
        />
        Add To Cart
      </button> */}
      <button
        className="btn1"
        style={{
          width: "160px",
          height: "35px",
          position: "absolute",
          left: "60px",
          top: "262px",
          backgroundColor: isHovered ?"#ffd12e": "white",
          borderRadius: "15px",
          border:"2px solid #ffd12e",
          transition: "background-color 0.3s",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          gap:"7px"
        }}
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={handleMouseEnter2 && handleMouseEnter}
        onMouseLeave={handleMouseLeave2 && handleMouseLeave}
      >
        <Icon
          aria-label="Cart"
          // icon={<AiOutlineShoppingCart />}
          as={AiOutlineShoppingCart}
          color="white.500"
          style={{ width: "18px", height: "28px" }}
        />
        Add To Cart
      </button>
      <CartModal
       isOpen={isModalOpen}
       onClose={() => setIsModalOpen(false)}
       dishName={dishName}
       prices={prices}
       category={category}
       image={image}
      />

      <hr
        style={{
          backgroundColor: "black",
          display: isDisplay ? "none" : "block",
          marginTop:"15px"
        }}
      />
      <div
        style={{
          display: isDisplay ? "none" : "block",
          width: "240px",
          margin: "auto",
          marginTop: "10px",
          marginLeft: "23px",
        }}
      >
        <p style={{ fontFamily: "rev" }}>
          {details}
        </p>
      </div>
      <hr
        style={{
          backgroundColor: "black",
          display: isDisplay ? "none" : "block",
        }}
      />
    </div>
  );
};

export default DishCard;
