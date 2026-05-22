import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import ProductManagement from './Pages/ProductManagement';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isAuthPage = location.pathname === '/login';

  if (isAuthPage) {
    return <Routes><Route path="/login" element={<Login />} /><Route path="*" element={<Navigate to="/login" />} /></Routes>;
  }

  return (
    <div className="app-layout">
      <Sidebar isMobileOpen={mobileMenuOpen} onLinkClick={() => setMobileMenuOpen(false)} />
      <div className="main-content">
        <Header onMenuToggle={() => setMobileMenuOpen(prev => !prev)} />
        <Routes>
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/products" element={<ProtectedRoute><ProductManagement /></ProtectedRoute>} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;