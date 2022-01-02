import React from 'react'
import { Container } from "react-bootstrap";
import axios from "axios";

const TopTenStories = () => {
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

  return (
    <Container>
      <table class="table table-bordered table-dark table-striped table-hover">
        <caption>Hacker News</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Karma</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((info,i)=>(
            <tr>
                <td>{i}</td>
                <td>{info.by.karma}</td>
                <td>{info.title}</td>
                <td>{info.by.id}</td>
            </tr>
           )) };
        </tbody>
      </table>
    </Container>
  );
};

export default TopTenStories;