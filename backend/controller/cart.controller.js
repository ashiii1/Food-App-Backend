import { CartModel } from "../model/cart.model";



const cartItems = async(req, res)=>{
    const { dishName, category, halfPortionQuantity, fullPortionQuantity, totalOrderValue, image } = req.body;
  const userId = req.user._id;
console.log("userID", userId)
  try {
    const cartItem = new CartModel({
      dishName,
      category,
      halfPortionQuantity,
      fullPortionQuantity,
      totalOrderValue,
      image,
      user: userId,
    });
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: 'Error adding to cart', error });
  }
}


module.exports={
    cartItems
}