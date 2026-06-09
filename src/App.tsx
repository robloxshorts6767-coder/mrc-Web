import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Learning from './pages/Learning';
import Community from './pages/Community';
import Contact from './pages/Contact';
import ACED from './pages/ACED';
import ACEDCurriculum from './pages/ACEDCurriculum';
import ACEDAdmissions from './pages/ACEDAdmissions';
import AIAssistant from './components/AIAssistant';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col relative font-sans">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/learning" element={<Learning />} />
              <Route path="/community" element={<Community />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/aced" element={<ACED />} />
              <Route path="/aced/curriculum" element={<ACEDCurriculum />} />
              <Route path="/aced/admissions" element={<ACEDAdmissions />} />
            </Routes>
          </AnimatePresence>
        </main>
        <AIAssistant />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
