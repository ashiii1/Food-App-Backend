import React, {  useEffect, useState } from "react";
import CartBox from "../../Components/CartItemBox";
import "./CartItem.css";
import Loading from "../../Components/Loading/Loading";
import PaymentModule from "../../Components/PaymentMofule";
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from "react-redux";
import { getCartItem, removeFromCart } from "../../Redux/Cart/action";

const CartItem = () => {

  const {  user } = useAuth0();
  const cartItems= useSelector((store)=>store.cartReducer.cartItems);
  const loading= useSelector((store)=>store.cartReducer.isLoading);
  const [grandTotal, setGrandTotal] = useState(0);
  const [filtered, setFiltered] = useState([]);

  const dispatch = useDispatch();
  
  const handleDelete = (id) => {
  dispatch(removeFromCart(id,user))
}

  useEffect(() => {
    const filterData = cartItems?.filter((el) => el._id !== 1);
    setFiltered(filterData || []); // Initialize with an empty array if filterData is null or undefined
  }, [cartItems]);

  useEffect(() => {
    // Calculate the grand total when cartItems change
    const total = cartItems.reduce((acc, el) => acc + el.totalOrderValue, 0);
    setGrandTotal(total);
  }, [cartItems]); // Dependency array with cartItems
  
  useEffect(()=>{
    dispatch(getCartItem(user))
  },[])
  // console.log("email user",user?.email)
 

  return (
    <div className="container">
      <div
        style={{
          width: "80%",
          boxShadow: "white 0px 20px 30px -10px",
          borderRadius: "15px",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        <h1 style={{ fontSize: "20px", fontWeight: "700", color: "#ffd12e" }}>
          Cart
        </h1>
        {!user && <h2 style={{padding:"20px"}}>User have to Log In first to add Dishes</h2> }
        
        {loading ? (
          <Loading />
        ) : (
          filtered?.map((el, index) => {
            return <CartBox key={index+1} item={el} onDelete={() => handleDelete(el._id)} />;
          })
        )}
      </div>
      <div style={{ height: "40px", display: "flex", marginTop: "30px" }}>
        <div
          style={{
            width: "80%",
            display: "flex",
            color: "#ffd12e",
            fontWeight: "700",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          Order Total:
        </div>
        <div
          style={{
            width: "20%",
            display: "flex",
            fontWeight: "700",
            paddingLeft: "10px",
            alignItems: "center",
          }}
        >
          {grandTotal}
        </div>
      </div>
       {/* Render the PaymentModule component and pass cartItems and setCartItems as props */}
       <div style={{width:"80%",margin:"auto",display:"flex", justifyContent:"end"}}>

       <PaymentModule setFiltered={setFiltered} />
       </div>
    </div>
  
  );
};

export default CartItem;