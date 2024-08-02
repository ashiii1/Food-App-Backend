import React, { useState } from "react";
import axios from "axios";

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Input, FormControl, FormLabel, VStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import BACKEND_API from "../API/api";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

const PaymentModule = ({setFiltered }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartItems= useSelector((store)=>store.cartReducer.cartItems);

  const {  user } = useAuth0();
  const navigate= useNavigate()
  const handlePayment = () => {
   if(!user){
    console.log("User not Loged In")
    return
   }
    setIsPaymentSuccessful(true);
    // Delete cart items from the server after successful payment
    deleteCartItems();
    setTimeout(() => {
        setIsModalOpen(false);
        setIsPaymentSuccessful(false);
        // Navigate to the home page after the modal is closed
        navigate("/");
      }, 2000);
  };

  const deleteCartItems = () => {
    // Get the IDs of the cart items to be deleted
    const itemIds = cartItems.map((item) => item._id);
  
    // Loop through each item ID and make separate DELETE requests
    itemIds.forEach((dishId) => {
      axios
          .delete(`${BACKEND_API}/cart/${dishId}`,{
            headers: {
                    "Authorization" : `Bearer ${user?.email}`
                    }
        })        
        .then(() => {
          // Update the cartItems state to remove the deleted item
          setFiltered([]);
          console.log("Payment Done - Cart empty")
        })
        .catch((error) => {
          console.error("Error deleting cart item:", dishId, error);
        });
    });
  };

  /*
    axios
            .delete(`${BACKEND_API}/cart/${dishId}`,{
                headers: {
                        "Authorization" : `Bearer ${user?.email}`
                        }
            })
            .then((response) => {
                // Filter out the deleted item from the cartItems state
                if(response.ok){
                console.log("Item Deleted")
                }
                dispatch({type: REMOVE_DISH, payload:dishId})
               
            })
            .catch((error) => {
                console.error("Error deleting item:", error);
            });
}
  
  */

  
  return (
    <div>
      <Button onClick={() => setIsModalOpen(true)}>Make Payment</Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Name:</FormLabel>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </FormControl>
              <FormControl>
                <FormLabel>Delivery Address:</FormLabel>
                <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
              </FormControl>
              <FormControl>
                <FormLabel>Card Number:</FormLabel>
                <Input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            {!isPaymentSuccessful && (
              <Button colorScheme="blue" mr={3} onClick={() => setIsModalOpen(false)}>
                Close
              </Button>
            )}
            {!isPaymentSuccessful && (
              <Button colorScheme="green" onClick={handlePayment}>
                Make Payment
              </Button>
            )}
            {isPaymentSuccessful && (
              <Text color="blue" fontSize="xl" fontWeight="bold" textAlign="center">
                Payment Successful! Order Placed!
              </Text>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PaymentModule;
