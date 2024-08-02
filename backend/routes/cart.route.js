const express= require("express");
const { findUserByEmail } = require("../middleware/cartUser.middleware");
const { CartModel } = require("../model/cart.model");


 const cartRouter = express.Router()


 cartRouter.post('/', findUserByEmail, async (req, res) => {
    const { dishName, category, halfPortionQuantity, fullPortionQuantity, totalOrderValue, image } = req.body;
    const userId = req.user._id;
  console.log(userId)
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
        console.error('Error adding to cart:', error); // Log the error for debugging purposes
        res.status(500).json({ message: 'Error adding to cart', error });
    }
  });



  // fetching cart items using user specific0 userId

  cartRouter.get("/", findUserByEmail ,async (req, res) => {
    const userId = req.user._id; // Assuming `req.user` is populated by the middleware
    console.log('Fetching cart items for user ID:', userId);
  
    try {
      const cartItems = await CartModel.find({ user: userId });
      res.status(200).json(cartItems);
    } catch (error) {
      console.error('Error fetching cart items:', error);
      res.status(500).json({ message: 'Error fetching cart items', error });
    }
  });


// deleting cart items

cartRouter.delete('/:id', findUserByEmail,  async (req, res) => {
    const cartItemId = req.params.id;
    const userId = req.user._id;
  
    try {
      const cartItem = await CartModel.findOneAndDelete({ _id: cartItemId, user: userId });
      if (!cartItem) {
        return res.status(404).json({ message: 'Cart item not found' });
      }
      res.status(200).json({ message: 'Cart item deleted successfully' });
    } catch (error) {
      console.error('Error deleting cart item:', error);
      res.status(500).json({ message: 'Error deleting cart item', error });
    }
  });



 module.exports= {cartRouter}