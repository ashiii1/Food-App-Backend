import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import DishCardSlider from "./DishCardSlider";
import { AppContext } from "../Context/ContextProvider";

const DishSlider = () => {
  
  const scrollContainerRef = useRef(null);
  const {data, loading}= useContext(AppContext);
  /**
   import axios from "axios";
   import BACKEND_API from "../API/api";
  const [data, setData] = useState([]);
   
  const fetchData = () => {
      // setLoading(true);
      axios
        .get(`${BACKEND_API}/menu`)
      .then((res) => {
        setData(res.data.menuList);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data)
  */


  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <ArrowButton onClick={() => scroll(-200)}>{"<"}</ArrowButton>

          <DIV
            ref={scrollContainerRef}
            style={{ width: "100%", margin: "auto" }}
          >
            {data &&
              data
                .slice(0, 15)
                ?.map((el, index) => <DishCardSlider key={index+1} {...el} />)}
          </DIV>
          <ArrowButton onClick={() => scroll(200)}>{">"}</ArrowButton>
        </Container>
      )}
    </>
  );
};

export default DishSlider;

const DIV = styled.div`
  width: 100%;
  height: "1000px";
  position: relative;
  top: 10px;
  overflow-x: auto;
  white-space: nowrap;
  margin: 15px 0 10px 0;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    display: none; // Hide the scrollbar
  }
  .scroll {
    display: inline-block; 
    margin-right: 5px;
  }
`;
const Container = styled.div`
  width: 92%;
  margin: auto;
  display: flex;
  align-items: center;
`;
const ArrowButton = styled.button`
  background-color: #ffd12e;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  padding: 10px;
  margin: 0 10px;
  font-weight: 600;
  &:hover {
    background-color: #f1d261;
  }
`;
