import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Apprecommendation } from "./Components/Apprecommendation";
import { TLapp } from "./Components/TLapp";
import { Casestudynavi } from "./Components/Casestudynavi";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/app-recommendation-analysis" element={<Apprecommendation/>}/>
          <Route path="/tl-app" element={<TLapp/>}/>
          <Route path="/product-teardown-navi" element={<Casestudynavi/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
