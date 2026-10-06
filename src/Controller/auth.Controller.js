const userModel = require('../model/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')




// REGISTRATION
async function registerController(req, res) {
    const { username, email, password, bio, profileImage } = req.body


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

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username, email, password: hash, bio, profileImage
    })
    const token = jwt.sign(
    {
        id: user._id,
        username:user.username
    }, 
    process.env.JWT_KEY, { expiresIn: "1d" }

    )
    res.cookie("token",token)

    res.status(201).json({
        message:"User Register",
        user:{
            username:user.username,
            email:user.email,
            Bio:user.bio,
            ProfileImage:user.profileImage
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

    const isPasswordValid = await bcrypt.compare(password,isUserExists.password)

    if(!isPasswordValid){
        return res.status(404).json({
            message:"Invalid Password"
        })
    }

    const token = jwt.sign(
        {
            id:isUserExists._id,
            username:isUserExists.username

        },
        process.env.JWT_KEY,
        {expiresIn:"1d"}
    )

    res.cookie("token",token)


    res.status(200).json({
        message:"User login",
        user:{
            username:isUserExists.username,
            emaail:isUserExists.email,
            bio:isUserExists.bio,
            profileImage:isUserExists.profileImage,
        }
    })
}




module.exports = {
   registerController,
    loginController
}