const mongoose = require("mongoose")

const connect = () => mongoose.connect("mongodb+srv://yahbouss:14012001@cluster0.pscq3.mongodb.net/Webdev-hacker-news?retryWrites=true&w=majority", ()=>console.log("connected"), e=>console.log(e))


module.exports = connect