import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* This handles the base URL (/) */}
        <Route path="/" element={<HomePage />} />
        
        {/* This handles the /about URL */}
        <Route path="/about" element={<AboutPage />} />

        {/* Optional: Redirect any unknown routes back to Home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;