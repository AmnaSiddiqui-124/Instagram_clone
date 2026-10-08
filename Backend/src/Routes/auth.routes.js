const express = require('express')
const authController = require('../Controller/auth.Controller')
const identifyUser = require('../middleware/post.middleware')



const authRoutes = express.Router()

authRoutes.post('/register',authController.registerController)

authRoutes.post('/login',authController.loginController)

authRoutes.get('/get-me',identifyUser,authController.getmeController)

module.exports = authRoutes