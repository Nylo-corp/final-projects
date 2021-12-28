import React from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios"


const Topten = () => {
    const [dummy_data, setdummy_data] = React.useState([])
    React.useEffect(() => {
        axios.get("http://localhost:3001/api/news")
        .then(res=>setdummy_data(res.data))
        .catch(err=>alert(err.message))
    }, [])
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {dummy_data.map((info, i)=>(<tr>
            <td>{i}</td>
            <td>{info.title}</td>
            <td>{info.by.about}</td>
          </tr>))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Topten;
