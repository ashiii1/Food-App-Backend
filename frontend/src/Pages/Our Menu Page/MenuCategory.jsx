import React, { useEffect } from "react";
import DishCard from "../../Components/DishCard";
import Card from "../../Components/card";
import { useSearchParams } from "react-router-dom";
import "./MenuCategory.css";
import Loading from "../../Components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getMenus } from "../../Redux/GetMenu/action";

// After clicking on the OUR MENU category, redirecting to the Menu Category Page

const MenuCategory = () => {
  const [searchParams]= useSearchParams();
  const category= searchParams.get("category")

  const dispatch = useDispatch();
  const data = useSelector((store)=>store.menuReducer.menus);
  const loading = useSelector((store)=>store.menuReducer.isLoading);

  const categoryParam = (category === "New" || category === "All") ? null : (category === "Non-Veg")? "Fried Chicken": category;
  

  useEffect(()=>{
    dispatch(getMenus(categoryParam))
  },[category])
  return (
    <div className="container">
      <div
        style={{
          textAlign: "center",
          fontWeight: "650",
          fontFamily: "algerian",
          fontSize: "27px",
          marginTop: "10px",
        }}
      >
        Our Menu
      </div>
      <Card />
      {loading ? (
        <Loading />
      ) : (
        <div
          id="menu_container"
          style={{ width: "90%", margin: "auto", marginLeft: "7%" }}
        >
          {data && data?.map((el, index) => (
            <DishCard key={index+1} {...el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
