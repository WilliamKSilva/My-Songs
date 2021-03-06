import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Home from './pages/Home';
import Metrics from './pages/Metrics';

import { GlobalStyle } from './styles/global';

function App() {
  return (    
      <Router>
        <Header />        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/metrics" element={<Metrics />} />
        </Routes>
        <Footer />
        <GlobalStyle />
      </Router>
  );
}

export default App;
