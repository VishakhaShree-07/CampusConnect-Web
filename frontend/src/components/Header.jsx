import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);


    return (
        <>
            <style>{`
                .dropdown {
                    position: relative;
                    display: inline-block;
                }
                .dropdown-label {
                    color: white;
                    font-weight: 500;
                    cursor: pointer;
                    padding: 0.5rem 0;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    transition: color 0.3s;
                }
                .dropdown-label:hover {
                    color: #a5b4fc;
                }
                .dropdown-content {
                    display: none;
                    position: absolute;
                    background-color: white;
                    min-width: 200px;
                    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
                    border-radius: 12px;
                    padding: 0.8rem 0;
                    z-index: 100;
                    top: 100%;
                    left: 0;
                    opacity: 0;
                    transform: translateY(10px);
                    transition: all 0.3s ease;
                }
                .dropdown:hover .dropdown-content {
                    display: block;
                    opacity: 1;
                    transform: translateY(0);
                }
                .dropdown-content li {
                    display: block;
                    width: 100%;
                }
                .dropdown-content a {
                    color: #1e293b;
                    padding: 0.8rem 1.5rem;
                    display: block;
                    font-size: 0.95rem;
                    transition: background 0.2s, color 0.2s;
                    border-radius: 8px;
                    margin: 0.2rem 0.5rem;
                }
                .dropdown-content a:hover {
                    background-color: #f1f5f9;
                    color: #4f46e5;
                }
                
                .site-header {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
                    border-bottom: 1px solid rgba(226, 232, 240, 0.6);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    padding: 0.5rem 0;
                }
                .logo {
                    font-weight: 900;
                    font-size: 1.6rem;
                    color: #0f172a;
                    letter-spacing: -0.03em;
                    text-decoration: none;
                }
                .logo .highlight {
                    background: linear-gradient(135deg, #4f46e5, #ec4899);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .site-header .container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    max-width: 1300px;
                    margin: 0 auto;
                    width: 100%;
                }
                
                .main-nav {
                    display: flex;
                    align-items: center;
                    gap: 3rem;
                }
                
                .nav-list {
                    display: flex;
                    align-items: center;
                    gap: 2.25rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                .nav-list a, .dropdown-label {
                    color: #475569;
                    font-weight: 600;
                    font-size: 1rem;
                    text-decoration: none;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }
                .nav-list a:hover, .dropdown-label:hover {
                    color: #4f46e5;
                }

                .nav-actions {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                
                .btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
                
                @media (max-width: 768px) {
                    .dropdown-content {
                        position: static;
                        box-shadow: none;
                        background: transparent;
                        display: block;
                        opacity: 1;
                        transform: none;
                        padding-left: 1rem;
                    }
                    .dropdown-content a {
                        color: #64748b;
                    }
                    .dropdown-content a:hover {
                        background: transparent;
                        color: #4f46e5;
                    }
                    .site-header .nav-list {
                        background: white;
                    }
                }

            `}</style>
            <header className="site-header">
                <div className="container">
                    <Link to="/" className="logo">Campus<span className="highlight">Connect</span></Link>
                    <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
                        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
                            <li><Link to="/">Home</Link></li>
                            <li className="dropdown">
                                <span className="dropdown-label">Explore ▾</span>
                                <ul className="dropdown-content">
                                    <li><Link to="/events" onClick={() => setIsMenuOpen(false)}>All Events</Link></li>
                                    <li><Link to="/hackathons" onClick={() => setIsMenuOpen(false)}>Hackathons</Link></li>
                                    <li><Link to="/workshops" onClick={() => setIsMenuOpen(false)}>Workshops</Link></li>
                                    <li><Link to="/webinars" onClick={() => setIsMenuOpen(false)}>Webinars</Link></li>
                                    <li><Link to="/internships" onClick={() => setIsMenuOpen(false)}>Internships</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                            <li><Link to="/calendar" onClick={() => setIsMenuOpen(false)}>Calendar</Link></li>
                            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                        </ul>
                        <div className={`nav-actions ${isMenuOpen ? 'active' : ''}`}>
                            {user ? (
                                <>
                                    <Link to={user.role === 'admin' ? '/admin' : '/dashboard'} className="btn" style={{ padding: '0.5rem 1.25rem', background: '#f8fafc', color: '#1e293b', border: '1px solid #e2e8f0', borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.2s' }} onMouseOver={(e) => e.target.style.background='#f1f5f9'} onMouseOut={(e) => e.target.style.background='#f8fafc'} onClick={() => setIsMenuOpen(false)}>
                                        {user.role === 'admin' ? 'Admin Panel' : 'Dashboard'}
                                    </Link>
                                    <button onClick={() => { logout(); setIsMenuOpen(false); }} className="btn" style={{ padding: '0.5rem 1.25rem', background: '#ef4444', color: 'white', borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem', border: 'none', cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(239, 68, 68, 0.3)', transition: 'all 0.2s' }} onMouseOver={(e) => {e.target.style.transform='translateY(-1px)'; e.target.style.boxShadow='0 6px 8px -1px rgba(239, 68, 68, 0.4)'}} onMouseOut={(e) => {e.target.style.transform='none'; e.target.style.boxShadow='0 4px 6px -1px rgba(239, 68, 68, 0.3)'}}>
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="btn" style={{ padding: '0.5rem 1.25rem', color: '#334155', fontWeight: 500, fontSize: '0.9rem' }} onClick={() => setIsMenuOpen(false)}>Login</Link>
                                    <Link to="/register" className="btn" style={{ padding: '0.5rem 1.5rem', background: 'linear-gradient(135deg, #4f46e5, #8b5cf6)', color: 'white', borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem', boxShadow: '0 4px 14px 0 rgba(79, 70, 229, 0.3)', transition: 'all 0.2s' }} onMouseOver={(e) => {e.target.style.transform='translateY(-1px)'; e.target.style.boxShadow='0 6px 16px 0 rgba(79, 70, 229, 0.4)'}} onMouseOut={(e) => {e.target.style.transform='none'; e.target.style.boxShadow='0 4px 14px 0 rgba(79, 70, 229, 0.3)'}} onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                                </>
                            )}
                        </div>
                    </nav>
                    <button 
                        className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
            </header>
        </>
    );
}

