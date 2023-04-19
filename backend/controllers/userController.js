const asyncHandler = require('express-async-handler');

//@desc  POST Register
//@route  GET /api/users
//@access  Public
const registerUser = asyncHandler(async (req,res) =>{

    res.status(200).json({message:"Register User"})
})


//@desc  POST Login
//@route  GET /api/users/login
//@access  Private
const loginUser = asyncHandler(async (req,res) =>{
   
    res.status(200).json({message:"Login User"})
})



//@desc  GET Me
//@route  GET /api/users/me
//@access  Private
const getMe = asyncHandler(async (req,res) =>{

    res.status(200).json({message:"My Info"})
})


module.exports = {registerUser, loginUser, getMe}