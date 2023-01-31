const asyncHandler = require('express-async-handler')
// get goals
// route GET /api/goals
const getGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message: "Get Goals"})
})

// set goal
// route POST /api/goals
const setGoal = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: "Set Goal"})
})

// update goal
// route PUT /api/goals/:id
const updateGoal = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`})
})

// delete goals
// route DELETE /api/goals/:id
const deleteGoal = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Delete Goal ${req.params.id}`})
})



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}