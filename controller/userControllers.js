import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// Sign up User
// Route POST /api/users

const signUpUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // See if user exist
  const userExist = await User.findOne({ email: email });

  if (userExist) {
    res.status(400);
    throw new Error('User already Exist');
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error('Could not create User');
  }
});

// Login/aut User
// Route Post /api/users/login

const LoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // find User in db
  const user = await User.findOne({ email: email });
});
