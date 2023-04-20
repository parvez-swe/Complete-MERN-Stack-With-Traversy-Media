const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const User = require('../models/userModel');

//@desc  GET goals
//@route  GET /api/goals
//@access  Private
const getGoals = asyncHandler(async (req,res) =>{
    const goals = await Goal.find({user:req.user.id});

    res.status(200).json(goals);
})


//@desc  SET goals
//@route  POST  /api/goals
//@access  Private
const setGoal = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal);
})



//@desc  Update goal
//@route  PUT /api/goals/:id
//@access  Private
const updateGoal = asyncHandler(async(req,res)=>{
    const goal = await Goal.findById(req.params.id);
    
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    // Check for User
    const user = await User.findById(req.user.id);

    if(!user){
        res.status(401)
        throw new Error('User not found');
    }

    // Make Sure that owner of goal
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not Authorized');
    }



    

    const updatedGoal = await Goal.findByIdAndUpdate(
        req.params.id,
         req.body,
        {new:true} //create new if there is no exist
    )

    res.status(200).json(updatedGoal);
})

//@desc  Delete goals
//@route  DELETE /api/goals/:id
//@access  Private
const deleteGoal = asyncHandler(async(req,res)=>{
    const goal = await Goal.findById(req.params.id);
    
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    
    // Check for User
    const user = await User.findById(req.user.id);

    if(!user){
        res.status(401)
        throw new Error('User not found');
    }

    // Make Sure that owner of goal
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not Authorized');
    }


    await Goal.findByIdAndDelete(req.params.id);

    res.status(200).json({message:`delete goal ${req.params.id}`});
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}