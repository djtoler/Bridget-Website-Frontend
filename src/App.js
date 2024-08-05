// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Modules from './Modules';
import Characters from './Characters';
import HamburgerMenu from './HamburgerMenu';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <HamburgerMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/teachers" element={<Characters />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
