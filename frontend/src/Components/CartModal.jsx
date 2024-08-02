// CartModal.js
import React, { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getCartItem } from "../Redux/Cart/action";
import BACKEND_API from "../API/api";

const CartModal = ({ isOpen, onClose, dishName, prices, category, image }) => {
  
  const {  user } = useAuth0();
  const dispatch = useDispatch();
  const [halfPortionQuantity, setHalfPortionQuantity] = useState(0);
  const [fullPortionQuantity, setFullPortionQuantity] = useState(0);



  const calculatePriceTotal = () => {
    const halfPortionPrice = prices.halfPortion * halfPortionQuantity;
    const fullPortionPrice = prices.fullPortion * fullPortionQuantity;
    return halfPortionPrice + fullPortionPrice;
  };
  const handleAddToCart = () => {
    // Calculate the total order value
    if(!user){
      console.log("User should logged in first to add to cart") 
      alert("Log In First to add")
      onClose(); 
      return
    }

    if(fullPortionQuantity === 0 && halfPortionQuantity === 0){
        alert("Add Portion")
        return
    }
    const totalOrderValue = calculatePriceTotal();

    // Prepare the order details to send in the POST request
    const orderDetails = {
      dishName,
      category,
      image,
      halfPortionQuantity,
      fullPortionQuantity,
      totalOrderValue,
      
    };

    //  API call with the order details to add to cart
    axios
      .post(`${BACKEND_API}/cart`, orderDetails,{
        headers: {
          "Authorization" : `Bearer ${user?.email}`
        }
      })
      .then((response) => {
        onClose(); 
        alert("Added to the Cart successfully");
        dispatch(getCartItem(user))
        console.log(response?"Dish Added to Cart":"")
      })
      .catch((error) => {
        console.error("Error placing order:", error.message);
        onClose(); 
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add to Cart: {dishName}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Half Portion: {prices.halfPortion}</FormLabel>
            <NumberInput
              defaultValue={halfPortionQuantity}
              onChange={(value) => setHalfPortionQuantity(value)}
              min={0}
              max={10} // You can adjust the max quantity value as needed
            >
              <NumberInputField placeholder="Enter quantity" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Full Portion: {prices.fullPortion}</FormLabel>
            <NumberInput
              defaultValue={fullPortionQuantity}
              onChange={(value) => setFullPortionQuantity(value)}
              min={0}
              max={10} // You can adjust the max quantity value as needed
            >
              <NumberInputField placeholder="Enter quantity" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <p style={{ marginTop: "1rem" }}>
            Total Price: ₹{calculatePriceTotal().toFixed(2)}
          </p>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleAddToCart}>
            Add
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CartModal;
