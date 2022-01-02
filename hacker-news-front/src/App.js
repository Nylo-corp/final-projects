import "./App.scss";
import NavBar from "./Components/Navbar/NavBar.Component";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate// redirect
} from "react-router-dom";
import Topten from "./Components/Topten/Topten.component";
import TopTenAuthors from "./Components/Topten/TopTenAuthors.component";
import TopTenStories from "./Components/Topten/ToptenStories.component";

const App = () => {
  return (
    <Router className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Topten/>}/>
        <Route path="/top10authors" element={<TopTenAuthors/>}/>
        <Route path="/top10stories" element={<TopTenStories/>}/>
      </Routes>
      
    </Router>
  );
};

export default App;
