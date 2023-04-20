const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        text:{
            type:String,
            required:[true,'Please add a text value']
        }
    },
    {timestamps:true} //for automatically add 'create at and updated at'

)

module.exports = mongoose.model('Goal',goalSchema);