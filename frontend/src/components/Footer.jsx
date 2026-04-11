import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer style={{ background: '#fff', padding: '5rem 0 3rem', borderTop: '1px solid #e2e8f0', marginTop: 'auto' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '4rem', textAlign: 'left' }}>
                    <div style={{ gridColumn: 'span 2' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1e1b4b', marginBottom: '1.5rem' }}>Campus<span style={{ color: '#4f46e5' }}>Connect</span></h2>
                        <p style={{ color: '#64748b', maxWidth: '300px', marginBottom: '2rem' }}>Empowering student life through seamless event exploration and community engagement at GLA University.</p>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 800, marginBottom: '1.5rem', color: '#1e293b' }}>Categories</h4>
                        <ul style={{ listStyle: 'none', padding: 0, color: '#64748b', lineHeight: 2 }}>
                            <li><Link to="/hackathons">Hackathons</Link></li>
                            <li><Link to="/workshops">Workshops</Link></li>
                            <li><Link to="/calendar">Event Calendar</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 800, marginBottom: '1.5rem', color: '#1e293b' }}>Company</h4>
                        <ul style={{ listStyle: 'none', padding: 0, color: '#64748b', lineHeight: 2 }}>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '2.5rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
                    © 2026 CampusConnect. Built with ❤️ for the student community.
                </div>
            </div>
        </footer>
    );
}
