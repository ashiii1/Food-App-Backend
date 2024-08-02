import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

// OUR MENU CART BOXES (categories)

const Card = () => {

  const menuCard = [
    {
      img: "https://media.istockphoto.com/id/1268025993/photo/curry-powders-and-seeds.jpg?s=612x612&w=0&k=20&c=vtiWGevY3ONjKMB6aJf2-czFwNIIwxk51Pm3l43BOCM=",
      name: "New"
    },
    {
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      name: "Pizzas"
    },
    {
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Burgers"
    },
    {
      img: "https://media.istockphoto.com/id/1398788293/photo/white-sauce-penne-pasta-directly-above-photo.webp?b=1&s=170667a&w=0&k=20&c=6FpP08HfJFPrEikpqkWV11rT_P7oUl047H2Tpq-UMfo=",
      name: "Pastas"
    },
    {
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bm9uJTIwdmVnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name: "Non-Veg"
    },
    {
      img: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Desserts"
    },
    {
      img: "https://images.unsplash.com/photo-1481671703460-040cb8a2d909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRyaW5rc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Drinks"
    },
    {
      img: "https://media.istockphoto.com/id/665380564/photo/brunch-choice-crowd-dining-food-options-eating-concept.webp?b=1&s=170667a&w=0&k=20&c=Gvoyvqbf-ayHzplDzDYwRyUXih0ttfymg_DQDd8TUTk=",
      name: "All"
    }
  ];
  return (
    <CARD>
      <div
      id="card-menu"
        style={{
          width: "87%",
          margin: "auto",
          gap: "12px",
          marginTop: "15px",
        }}
      >
        {menuCard.map((el, index) => {
          return (
            <Link
            key={index+1}
              to={`/menu?category=${el.name}`}
              style={{
                textDecoration: "none",
                fontFamily: "cursive",
                color: "#ffd12e",
                fontSize: "38px",
                fontWeight: "bold",
                display: "flex",
              }}
            >
              <div
                id="card-element"
                style={{
                  width: "100%",
                  margin: "auto",
                  backgroundImage: `url(${el.img})`,
                  backgroundSize: "100% 100%", // Fix the size of the background image
                  backgroundRepeat: "no-repeat",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  fontFamily: "cursive",
                }}
              >
                {el.name}
              </div>
            </Link>
          );
        })}
      </div>
    </CARD>
  );
};


export default Card;

const CARD = styled.div`
  #card-menu{
    display: grid;
    grid-template-columns: repeat(2, 1fr);

  }
  #card-element{
    height: 200px;
  }

   @media (min-width: 780px) {
    #card-menu{
      grid-template-columns: repeat(4, 1fr);
    }
    #card-element{
      height: 290px;
    }
  }
  
 


`;
