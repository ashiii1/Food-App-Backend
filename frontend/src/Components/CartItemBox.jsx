import React from 'react'
import Button from './Button'

const CartBox = ({ item, onDelete }) => {
  const { id, dishName, category, halfPortionQuantity, fullPortionQuantity, totalOrderValue, image } = item;

  return (
    <>
    
    <div style={{display:"flex", marginTop:"8px", borderBottom:"2px solid white", borderRadius:"5px"}}>

    <div style={{width:"80%", margin:"auto", display:"flex", gap:"20px"}}>

      <div style={{width:"50%", height:"250px"}} >
      <img style={{width:"100%", height:"250px"}} src={image} alt={dishName} />

      </div>
      <div>
      <h4 style={{ marginTop:"5px" }} >Dish Name: <span style={{opacity:"1", color:"#ffd12e"}}>{dishName}  </span> </h4>

      <h4 style={{ marginTop:"5px" }} >Category:  <span style={{opacity:"1", color:"#ffd12e"}}>{category}  </span> </h4>

      <h4 style={{ marginTop:"5px" }} >Half Portion:  <span style={{opacity:"1", color:"#ffd12e"}}>{halfPortionQuantity}  </span> </h4>

      <h4 style={{ marginTop:"5px",marginBottom:"10px" }} >Full Portion:  <span style={{opacity:"1", color:"#ffd12e", }}>{fullPortionQuantity}  </span> </h4>
    <Button  btnText={"Delete"}
              buttonClick={() =>onDelete(id)} />
      </div>

    </div>
    <div style={{width:"20%", display:"flex",justifyContent:"center", alignItems:"end",paddingLeft:"5px"}}>
           
      <h4 style={{color:"#ffd12e", marginTop:"5px",fontWeight:"700" }} >Total:  <span style={{opacity:"1", fontWeight:"500"}}>{totalOrderValue}  </span> </h4>
       
    </div>
    </div>
    
    </>
  )
}

export default CartBox