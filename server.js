require('dotenv').config()
const app = require("./src/app")
const dbConnect = require('./src/config/dbConnect')


dbConnect()



app.listen(3000,()=>{
    console.log('server is running on port 3000');
    
})