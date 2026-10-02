const userModel = require('../model/user.model')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')




// REGISTRATION
async function registerController(req, res) {
    const { username, email, password, Bio, ProfileImage } = req.body


    const isUserExist = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (isUserExist) {
        return res.status(409).json({
            message: "User already exist" + (isUserExist.email == email ? "Email alredy exist" : "UserName is already exist")
        })
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex')

    const user = await userModel.create({
        username, email, password: hash, Bio, ProfileImage
    })
    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_KEY, { expiresIn: "1d" }

    )
    res.cookie("token",token)

    res.status(201).json({
        message:"User Register",
        user:{
            username:user.username,
            email:user.email,
            Bio:user.bio,
            ProfileImage:user.ProfileImage
        }
    })

}


// LOGIN


async function loginController(req,res){
    const {username,email,password} = req.body

    const isUserExists = await userModel.findOne({
        $or:[
           {
            username:username
           },
           {
            email:email
           }
        ]

    })
    if(!isUserExists){
        return res.status(409).json({
            message:"User not found"
        })
    }
}




module.exports = {
   registerController,
    loginController
}