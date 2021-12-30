import React from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

const Topten = () => {
    const [dummy_data, setdummy_data] = React.useState([])
    React.useEffect(() => {
        axios.get("http://localhost:8000/api/news")
        .then(res=>setdummy_data(res.data))
        .catch(err=>alert(err.message))
    }, []) 
  return (
    <Container>
      <table class="table table-bordered table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {dummy_data.map((info, i)=>(
          <tr>
            <td>{i}</td>
            <td>{info.title}</td>
            <td>{info.by.id}</td>
          </tr> ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Topten;
