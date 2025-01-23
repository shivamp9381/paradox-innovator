import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import About from './Pages/About/about';
import Contact from './Pages/Contact/contact';
import Services from './Pages/Services/services';
import Anshu from './Pages/Anshu/anshu';
import Ankit from './Pages/ankit';
import Swayam from './Pages/swayam';
import Ranjan from './Pages/ranjan';
import Shreya from './Pages/shreya';
import PrivacyPolicy from './Pages/privacy';
import SDGPage from './Pages/SDG/SDGPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/anshu" element={<Anshu />} />
          <Route path="/ankit" element={<Ankit />} />
          <Route path="/swayam" element={<Swayam />} />
          <Route path="/ranjan" element={<Ranjan />} />
          <Route path="/shreya" element={<Shreya />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/sdgpage" element={<SDGPage />} />
          {/* <Route path="/privacy" element={<Privacy />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
