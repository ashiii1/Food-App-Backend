import React, { useState } from "react";
import { Icon, IconButton } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartModal from "../CartModal";

const DishCardSlider = ({
  image,
  category,
  dishName,
  prices,
  details,
  rating,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="scroll"
      style={{
        width: "270px",
        // border: "2px dashed red",
        height: "290px",
        position: "relative",
        backgroundColor: "#010f29",
        marginTop: "70px",
        marginBottom: "10px",
        borderRadius: "15px",
      }}
    >
      <div
        className="dish_image"
        style={{
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
          position: "relative",
          top: "130px",
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

        <div
          style={{
            width: "40%",
            margin: "auto",
            textAlign: "left",
            marginLeft: "36%",
            marginTop: "5px",
          }}
        >
          <h4>
            Half:{" "}
            <span style={{ opacity: "1", color: "#ffd12e" }}>
              {prices.halfPortion}{" "}
            </span>{" "}
          </h4>

          <h4>
            Full:{" "}
            <span style={{ opacity: "1", color: "#ffd12e" }}>
              {prices.fullPortion}{" "}
            </span>{" "}
          </h4>

          <h4>
            Rating:{" "}
            <span style={{ opacity: "1", color: "#ffd12e" }}>{rating}</span>{" "}
          </h4>
        </div>
      </div>
      <button
        className="btn1"
        style={{
          width: "160px",
          height: "35px",
          position: "absolute",
          left: "60px",
          top: "272px",
          borderRadius: "15px",
          border: "2px solid #ffd12e",
          transition: "background-color 0.3s",
          backgroundColor: "#ffd12e",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          gap:"7px"
        }}
        onClick={() => setIsModalOpen(true)}
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

      <div
        style={{
          width: "240px",
          margin: "auto",
          marginTop: "10px",
          marginLeft: "23px",
        }}
      ></div>
    </div>
  );
};

export default DishCardSlider;
