import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { Admin, Booking, Home, Services, Staff } from './pages/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="staff" element={<Staff />} />
        <Route path="services" element={<Services />} />
        <Route path="booking" element={<Booking />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  </Router>
);
