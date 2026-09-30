const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"This username is already exaists"],
        require:[true,'UserName is required']
    },
    email:{
        type:String,
        unique:[true,"This email is already exaists"],
        require:[true,'User email is required']
    },
    password:{
        type:String,
        require:[true,'User password is required']
    },
    bio:String,
    profileImage:{
        type:String,
        default:'https://ik.imagekit.io/hvgbzzbx6/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3485.avif'
    }
})


const userModel = mongoose.model('user',userSchema)



module.exports = userModel