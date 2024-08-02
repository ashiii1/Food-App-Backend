const jwt = require('jsonwebtoken');
const { UserModel } = require('../model/user.model');
require('dotenv').config();

const authCallback = async (req, res) => {
  const { name, email, picture } = req.body;

  try {
    // Check if the user already exists in the database
    let existingUser = await UserModel.findOne({ email: email });

    if (!existingUser) {
      // If the user does not exist, create a new user
      const newUser = new UserModel({
        name: name,
        email: email,
        password: '', // Password not needed as Auth0 handles authentication
        picture: picture, // Store the user's picture
      });

      existingUser = await newUser.save();
    }

    // Generate a JWT token for the user
    const jwtToken = jwt.sign(
      { id: existingUser._id, name: existingUser.name, picture: existingUser.picture },
      process.env.SERCET_KEY
    );

    // Send token and user info back to the client
    res.status(200).json({
      message: 'Login Successful',
      token: jwtToken,
      ID: existingUser._id,
      NAME: existingUser.name,
      PICTURE: existingUser.picture, // Send the picture to the frontend
    });
  } catch (error) {
    res.status(500).json({ error: `Error saving user: ${error.message}` });
  }
};

module.exports = {
  authCallback,
};
