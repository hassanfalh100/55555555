import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ContentProvider } from './contexts/ContentContext';

// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import AuthLayout from './layouts/AuthLayout';

// Frontend Pages
import HomePage from './pages/frontend/HomePage';
import ArticlesPage from './pages/frontend/ArticlesPage';
import ArticleDetailPage from './pages/frontend/ArticleDetailPage';
import HandoutsPage from './pages/frontend/HandoutsPage';
import AboutPage from './pages/frontend/AboutPage';
import ContactPage from './pages/frontend/ContactPage';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminArticles from './pages/admin/AdminArticles';
import AdminArticleEdit from './pages/admin/AdminArticleEdit';
import AdminHandouts from './pages/admin/AdminHandouts';
import AdminHandoutEdit from './pages/admin/AdminHandoutEdit';
import AdminSettings from './pages/admin/AdminSettings';
import AdminCategories from './pages/admin/AdminCategories';
import AdminSeo from './pages/admin/AdminSeo';
import Login from './pages/admin/Login';

function App() {
  return (
    <AuthProvider>
      <ContentProvider>
        <Router>
          <Routes>
            {/* Frontend Routes */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="articles" element={<ArticlesPage />} />
              <Route path="articles/:id" element={<ArticleDetailPage />} />
              <Route path="handouts" element={<HandoutsPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
            
            {/* Admin Authentication */}
            <Route path="/admin/login" element={<AuthLayout />}>
              <Route index element={<Login />} />
            </Route>
            
            {/* Admin Dashboard Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="articles" element={<AdminArticles />} />
              <Route path="articles/:id" element={<AdminArticleEdit />} />
              <Route path="handouts" element={<AdminHandouts />} />
              <Route path="handouts/:id" element={<AdminHandoutEdit />} />
              <Route path="settings" element={<AdminSettings />} />
              <Route path="categories" element={<AdminCategories />} />
              <Route path="seo" element={<AdminSeo />} />
            </Route>
          </Routes>
        </Router>
      </ContentProvider>
    </AuthProvider>
  );
}

export default App;