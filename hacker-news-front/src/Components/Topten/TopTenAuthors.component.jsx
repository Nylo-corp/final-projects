import React from 'react'
import { Container } from "react-bootstrap";
import axios from "axios";

//sorted in an DESCENDING order

const TopTenAuthors = () => {
    const [dummy_data, setdummy_data] = React.useState([]);
    React.useEffect(() => {
        axios.get("http://localhost:8000/api/news")
        .then(res=>setdummy_data(res.data))
        .catch(err=>alert(err.message))
    }, []) 

    const sortedData = [...dummy_data];
    sortedData.sort((a, b) => {
      if (a.by.karma < b.by.karma) {
        return 1;
      }
      if (a.by.karma > b.by.karma) {
        return -1;
      }
      return 0; 
    });


    /* How to sort a mongodb collection:

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var mysort = { name: -1 };
    dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
        console.log(result);
        db.close();
    });
    });  
    */
   
  return (
    <Container>
      <table class="table table-bordered table-dark table-striped table-hover">
        <caption>Hacker News</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Karma</th>
            <th>About</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((info,i)=>(
            <tr>
                <td>{i}</td>
                <td>{info.by.id}</td>
                <td>{info.by.karma}</td>
                <td>{info.by.about}</td>
            </tr>
           )) };
        </tbody>
      </table>
    </Container>
  );
};

export default TopTenAuthors;
