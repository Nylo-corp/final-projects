const mongoose = require("mongoose")

const story = new mongoose.Schema({
     id: Number,
     by: {
          about: String,
          id: String,
          karma: Number
     },
     title: String,
     score: String
})

module.exports = mongoose.model("Story", story)