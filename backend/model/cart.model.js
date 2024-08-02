const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  dishName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  halfPortionQuantity: {
    type: Number,
    required: true,
    default: 0,
  },
  fullPortionQuantity: {
    type: Number,
    required: true,
    default: 0,
  },
  totalOrderValue: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
});

const CartModel = mongoose.model('cartItems', cartItemSchema);

module.exports = {
  CartModel,
};
