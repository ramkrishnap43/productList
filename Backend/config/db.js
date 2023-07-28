const mongoose = require("mongoose");
require('dotenv').config()

const connection = mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("database connected")
})
.catch((e)=>{
    console.log(e , "error found")
})

module.exports = {connection}