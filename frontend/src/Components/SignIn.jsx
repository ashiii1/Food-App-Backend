import React, { useState } from 'react';
import axios from "axios"
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import BACKEND_API from '../API/api';

export default function Signin() {
  const [name, setName]= useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();

  const handleSignup = async () => {
    const userDetails = {
      name,
      email,
      password
    };

    try {
      const response = await axios.post(`${BACKEND_API}/user/register`, userDetails);
      const data = response.data;
      // console.log(data);
      resetFields(); // Reset input fields after successful signup  
      alert("Account Created Successfully");
      navigate("/");
    } catch (error) {
      console.log("Signup failed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
  };

  const resetFields = () => {
    setName("")
    setEmail("");
    setPassword("");
  };
// console.log(email, password)
  return (
    
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign up for an account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all our features and activities. Join us now! ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>

          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
            <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  required
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  required
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  required
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Checkbox>Remember me</Checkbox>
                <Button
                  type='submit'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
