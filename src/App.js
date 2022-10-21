import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import GiddyPay from "./Pages/GiddyPay";
import ContactUs from "./Pages/Company/ContactUs";
import AboutUs from "./Pages/Company/AboutUs";
import FAQs from "./Pages/Company/FAQs";
import JoinOurTeam from "./Pages/JoinOurTeam";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions";
import { useEffect } from "react";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);

  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/giddy-pay" element={<GiddyPay />} />
            <Route path="company/contact-us" element={<ContactUs />} />
            <Route path="/company/about-us" element={<AboutUs />} />
            <Route path="/company/FAQs" element={<FAQs />} />
            <Route path="/join-our-team" element={<JoinOurTeam />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
