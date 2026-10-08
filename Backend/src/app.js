const express = require('express')
const cookieparser = require('cookie-parser')
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cookieparser())
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))


const authRoutes = require('./Routes/auth.routes')
const postRoute = require('./Routes/post.route')
const userRoute = require('./Routes/user.route')



app.use('/api/auth',authRoutes)
app.use('/api/post',postRoute)
app.use('/api/users',userRoute)



module.exports = app