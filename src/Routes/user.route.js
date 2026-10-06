const express = require('express')
const userController = require('../Controller/user.Controller')
const identifyUser = require('../middleware/post.middleware')





const userRoute = express.Router()

userRoute.post('/follow/:username',identifyUser,userController.followUserControlle)


userRoute.post('/unfollow/:username',identifyUser,userController.unfollowUser)


module.exports = userRoute