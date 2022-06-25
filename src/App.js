import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import GiddyPay from "./Pages/GiddyPay";
import ContactUs from "./Pages/Company/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/giddy-pay" element={<GiddyPay />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
