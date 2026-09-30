const mongoose = require('mongoose')




async function dbConnect(){
  await  mongoose.connect(process.env.DB_URL)
   
        console.log("DataBase Connected");
        
}
module.exports = dbConnect
