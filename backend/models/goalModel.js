const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
    {
        text:{
            type:String,
            required:[true,'Please add a text value']
        }
    },
    {timestamps:true} //for automatically add 'create at and updated at'

)

module.exports = mongoose.model('Goal',goalSchema);