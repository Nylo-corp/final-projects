const Story = require("../models/story")

const router = require("express").Router()

router.get("/", (req,res)=>{
  try{
    Story.find({}, (err, ress)=>{
      if (err){
        res.status(400).send("no data found")
      }
      res.send(ress)
    })
  }catch(err){
    res.status(500).send(err.data)
  }
})

module.exports = router