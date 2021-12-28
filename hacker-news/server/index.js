const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const morganBody = require('morgan-body');
const connect = require("./db");
const { application } = require("express");
const dummy_data = require("../dummy_data");

morganBody(app)

const port = process.env.PORT || 3001; //since i'm using mac, the only port available is this

app.use(cors())
app.use(express.json()) //=> req.body

connect()

app.get("/api/news", (req,res)=>{
    res.send(dummy_data)
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
