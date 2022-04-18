const asyncHandler = require("express-async-handler");
const User = require("../models/User.js");
const generateToken =require("../utils/generateToken.js");
//Compare l'user entré avec les users dans la database
const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      surname: user.surname,
      username: user.username,
      //token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});
//Créée un user dans la db
const registerUser = asyncHandler(async (req, res) => {
  const { name,surname, username, password } = req.body;

  const userExists = await User.findOne({ username });

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    surname,
    username,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      surname: user.surname,
      username: user.username,
      //token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});
//modifie un user

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findOne({username},{password});

  if (user) {
    user.name = req.body.name || user.name;
    user.surname=req.body.name || user.surname;
    user.pic = req.body.pic || user.pic;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      username: updatedUser.username,
      pic: updatedUser.pic,
      //token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

module.exports= { authUser, updateUserProfile, registerUser }