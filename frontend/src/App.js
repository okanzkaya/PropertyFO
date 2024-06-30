import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const PropertyPage = lazy(() => import('./pages/PropertyPage'));
const TenantPage = lazy(() => import('./pages/TenantPage'));
const TicketPage = lazy(() => import('./pages/TicketPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));
const DocumentPage = lazy(() => import('./pages/DocumentPage'));
const SubscriptionPage = lazy(() => import('./pages/SubscriptionPage'));

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
            <Route path="/properties" element={<PrivateRoute><PropertyPage /></PrivateRoute>} />
            <Route path="/tenants" element={<PrivateRoute><TenantPage /></PrivateRoute>} />
            <Route path="/tickets" element={<PrivateRoute><TicketPage /></PrivateRoute>} />
            <Route path="/payments" element={<PrivateRoute><PaymentPage /></PrivateRoute>} />
            <Route path="/documents" element={<PrivateRoute><DocumentPage /></PrivateRoute>} />
            <Route path="/subscription" element={<PrivateRoute><SubscriptionPage /></PrivateRoute>} />
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
