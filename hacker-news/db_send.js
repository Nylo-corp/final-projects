const mongoose = require("mongoose")
const dummy_data = require("./dummy_data")
const Story = require("./server/models/story")
const connect = require("./server/db/index")

connect()

const seedDB = async () => {
    await Story.insertMany(dummy_data)
  }
seedDB().then(() => {
    mongoose.connection.close()
})