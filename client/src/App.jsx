import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Marketplace from './pages/Marketplace';
import ProfilePage from './pages/ProfilePage';
import ListNewItemPage from './pages/ListNewItemPage';
import ListingDetailPage from './pages/ListingDetailPage';
import EditListingPage from './pages/EditListingPage';
import MessagesPage from './pages/MessagesPage';
import ActivityCenterPage from './pages/ActivityCenterPage';
import LostAndFoundPage from './pages/LostAndFoundPage';
import LostFoundDetailPage from './pages/LostFoundDetailPage';
import ReportLostItemPage from './pages/ReportLostItemPage';
import TransactionsPage from './pages/TransactionsPage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Protected routes */}
        <Route path="/marketplace" element={
          <ProtectedRoute><Marketplace /></ProtectedRoute>
        } />
        <Route path="/listings/create" element={
          <ProtectedRoute><ListNewItemPage /></ProtectedRoute>
        } />
        <Route path="/listings/:id" element={
          <ProtectedRoute><ListingDetailPage /></ProtectedRoute>
        } />
        <Route path="/listings/:id/edit" element={
          <ProtectedRoute><EditListingPage /></ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute><ProfilePage /></ProtectedRoute>
        } />
        <Route path="/messages" element={
          <ProtectedRoute><MessagesPage /></ProtectedRoute>
        } />
        <Route path="/messages/:partnerId" element={
          <ProtectedRoute><MessagesPage /></ProtectedRoute>
        } />
        <Route path="/transactions" element={
          <ProtectedRoute><TransactionsPage /></ProtectedRoute>
        } />
        <Route path="/activity" element={
          <ProtectedRoute><ActivityCenterPage /></ProtectedRoute>
        } />
        <Route path="/lostfound" element={
          <ProtectedRoute><LostAndFoundPage /></ProtectedRoute>
        } />
        <Route path="/lostfound/report" element={
          <ProtectedRoute><ReportLostItemPage /></ProtectedRoute>
        } />
        <Route path="/lostfound/:id" element={
          <ProtectedRoute><LostFoundDetailPage /></ProtectedRoute>
        } />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;