const express = require('express')
const cookieparser = require('cookie-parser')


const app = express()
app.use(express.json())
app.use(cookieparser())


const authRoutes = require('./Routes/auth.routes')
const postRoute = require('../src/Routes/post.route')
const userRoute = require('../src/Routes/user.route')



app.use('/api/auth',authRoutes)
app.use('/api/post',postRoute)
app.use('/api/users',userRoute)



module.exports = app