import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Cards from './pages/Cards/Cards';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;