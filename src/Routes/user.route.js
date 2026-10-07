const express = require('express')
const userController = require('../Controller/user.Controller')
const identifyUser = require('../middleware/post.middleware')





const userRoute = express.Router()

userRoute.post('/follow/:username',identifyUser,userController.followUserControlle)


userRoute.post('/follow/accept/:username',identifyUser,userController.acceptFollowRequest)

userRoute.post('/follow/reject/:username',identifyUser,userController.rejectFollowRequest)


userRoute.post('/unfollow/:username',identifyUser,userController.unfollowUser)


module.exports = userRoute