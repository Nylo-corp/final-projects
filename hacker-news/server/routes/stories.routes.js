let MongoClient = require('mongodb').MongoClient;
const express = require('express')
const app=express();
const recordRoutes = express.Router();

// Specify your local MongoDB instance
var url = "mongodb://localhost:27017/";

// Get all stories
app.get('/api/stories', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("put database name here");
        dbo.collection("collection name here").findOne({
            id: req.params.id,
            by: req.params.by,
            title: req.params.title,
            score: req.body.score
        }, 
        function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        });
    });
});


// This section will help you get a list of 10 stories.
recordRoutes.route("/api/stories").get(async function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("collection name")
    .find({}).limit(10)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching stories!");
     } else {
        res.json(result);
      }
    });
})
