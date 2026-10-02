const express = require('express')
const cookieparser = require('cookie-parser')
const authRoutes = require('./Routes/auth.routes')
const postRoute = require('../src/Routes/post.route')



const app = express()
app.use(express.json())
app.use(cookieparser())
app.use('/api/auth',authRoutes)
app.use('/api/post',postRoute)



module.exports = app