import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Registration from './components/Registration';
import './App.css';
import Add from './components/Add';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Add />} />
        <Route path="/add" element={<Registration/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
