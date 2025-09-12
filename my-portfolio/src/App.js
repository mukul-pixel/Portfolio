import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Apprecommendation } from "./Components/Apprecommendation";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/app-recommendation-analysis" element={<Apprecommendation/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
