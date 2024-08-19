
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TodaysSales from './pages/TodaysSales';
import SalesComparison from './pages/SalesComparison';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<TodaysSales />} />
          <Route path="/comparison" element={<SalesComparison />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
