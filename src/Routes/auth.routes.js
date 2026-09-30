const express = require('express')
const authController = require('../Controllers/auth.controller')



const authRoutes = express.Router()

authRoutes.post('/register',authController.registrationController)

authRoutes.post('/login',authController.loginController)

module.exports = authRoutes