import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import PropertyPage from './pages/PropertyPage';
import TenantPage from './pages/TenantPage';
import TicketPage from './pages/TicketPage';
import PaymentPage from './pages/PaymentPage';
import DocumentPage from './pages/DocumentPage';
import SubscriptionPage from './pages/SubscriptionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/properties" element={<PropertyPage />} />
        <Route path="/tenants" element={<TenantPage />} />
        <Route path="/tickets" element={<TicketPage />} />
        <Route path="/payments" element={<PaymentPage />} />
        <Route path="/documents" element={<DocumentPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
