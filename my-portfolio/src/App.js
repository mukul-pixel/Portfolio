import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Apprecommendation } from "./Components/Apprecommendation";
import { TLapp } from "./Components/TLapp";
import { Casestudynavi } from "./Components/Casestudynavi";
import { Roleandresponsibility } from "./Components/Roleandresponsibility";
import { Mixpanel } from "./Components/Mixpanel";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/app-recommendation-analysis" element={<Apprecommendation/>}/>
          <Route path="/warehouse-gamification" element={<TLapp/>}/>
          <Route path="/role-and-responsibility" element = {<Roleandresponsibility/>}/>
          <Route path="/product-teardown-navi" element={<Casestudynavi/>}/>
          <Route path="/mixpanel-analysis" element={<Mixpanel/>}/>
          <Route path="/mixpanel-analysis" element={<Mixpanel/>}/> {/* Change the component to product-teardown */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
