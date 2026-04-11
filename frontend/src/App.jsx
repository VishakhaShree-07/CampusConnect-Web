import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Calendar from './pages/Calendar';
import Workshops from './pages/Workshops';
import Hackathons from './pages/Hackathons';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import UserPanel from './pages/UserPanel';
import AdminPanel from './pages/AdminPanel';

function AppContent() {
    const location = useLocation();
    
    // Auth pages don't have header and footer
    const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

    return (
        <>
            {!isAuthPage && <Header />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/workshops" element={<Workshops />} />
                <Route path="/hackathons" element={<Hackathons />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={
                    <ProtectedRoute>
                        <UserPanel />
                    </ProtectedRoute>
                } />
                <Route path="/admin" element={
                    <ProtectedRoute requireAdmin={true}>
                        <AdminPanel />
                    </ProtectedRoute>
                } />
            </Routes>
            {!isAuthPage && <Footer />}
        </>
    );
}

export default function App() {
    return (
        <AuthProvider>
            <Router>
                <AppContent />
            </Router>
        </AuthProvider>
    );
}
