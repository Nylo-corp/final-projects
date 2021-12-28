const mongoose = require("mongoose")

const connect = () => mongoose.connect(process.env.MONGODB_LINK, ()=>console.log("connected"), e=>console.log(e))


module.exports = connect