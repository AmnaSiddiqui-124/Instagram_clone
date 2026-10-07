const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
    imgUrl:{
        type:String,
        required:[true,'imageUrl is require for creating an post']
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,"UserId is required for creating an post"]
    }
})


const postModel = mongoose.model('posts',postSchema)


module.exports = postModel