const userModel = require('../model/user.model')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')


//REGISTRATION CONTROLLER 

async function registrationController (req,res){
    const {username,email,password,bio,profileImage} = req.body

    const isUserAlreadyExists = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(isUserAlreadyExists){
        return res.status(409).json({
            message:"User already Exists"+(isUserAlreadyExists.email == email ? "Email Already Exists" : "UserName Already Exists")
        })
    }


    const hash = crypto.createHash('sha256').update(password).digest('hex')


    const user = await userModel.create({
        username,email,password:hash,bio,profileImage
    })

    const token = jwt.sign(
        {
            id:user._id
        },
        process.env.JWT_KEY,{expiresIn:"1d"}
    )
    res.cookie("token",token)

    res.status(201).json({
        message:"User Register",
        user:{
            email:user.email,
            username:user.username,
            bio:user.bio,
            profileImage:user.profileImage
        }
    })

}

// LOGIN CONTROLLER

async function loginController (req,res){
    const {username,email,password} = req.body

    const user = await userModel.findOne({
        $or:[
            {
                username:username
            },
            {
                email:email
            }
        ]
    })

    if(!user){
        return res.status(409).json({
            message:"User not found"
        })
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex')
    
    const isPasswordValid = hash == user.password

    if(!isPasswordValid){
        return res.status(401).json({
            message:"Invalid Password!"
        })
    }


    const token = jwt.sign(
        {id:user._id},
        process.env.JWT_KEY,
        {expiresIn:"1d"}
    )

    res.cookie("token",token)


    res.status(200).json({
        message:"User LoggedIn",
        user:{
            username:user.username,
            email:user.email,
            bio:user.bio,
            profileImage:user.profileImage

        }
    })
}

module.exports = {
    registrationController,
    loginController
}