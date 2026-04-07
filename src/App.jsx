import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

function App() {
  // If we are in development mode, use "/"
  // If we are in production (GitHub), use "/Anthoscope-Landing-page"
  const baseName = import.meta.env.DEV ? '/' : '/Anthoscope-Landing-page';

  return (
    <Router basename={baseName}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;