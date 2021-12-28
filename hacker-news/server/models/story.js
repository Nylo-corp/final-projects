const mongoose = require("mongoose")

const story = mongoose.Schema({
     id: Number,
     by: String,
     title: String,
     score: String
})

module.exports = mongoose.model("Story", story)