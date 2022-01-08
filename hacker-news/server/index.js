const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const morganBody = require('morgan-body');
const connect = require("./db");
const stories = require("./routes/stories.routes")

morganBody(app)

const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json()) //=> req.body

connect()

app.use("/api/news", stories)

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
