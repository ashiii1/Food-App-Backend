const express = require('express');
const { UserModel } = require('../model/user.model');
const router = express.Router();

// Middleware to find the user by email
const findUserByEmail = async (req, res, next) => {
//   const { email } = req.body;
const email = req.headers.authorization.split(' ')[1]; // Extract email from Authorization header

  console.log('Searching for email:', email); // Log the email being searched

  try {
    const user = await UserModel.findOne({ email });
    console.log('User found:', user); // Log the user document found

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


module.exports = {
    findUserByEmail,
  };
  