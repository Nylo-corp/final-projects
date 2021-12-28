import "./App.scss";
import NavBar from "./Components/Navbar/NavBar.Component";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate// redirect
} from "react-router-dom";
import Topten from "./Components/Topten/Topten.component";

const App = () => {
  return (
    <Router className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Topten/>}/>
      </Routes>

    </Router>
  );
};

export default App;
