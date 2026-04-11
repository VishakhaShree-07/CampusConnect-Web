import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <main>
            <style>{`
                /* Hero Section */
                .hero {
                    position: relative;
                    background: linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)),
                        url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2000');
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                    color: white;
                    padding: 10rem 0 8rem;
                    text-align: center;
                    overflow: hidden;
                }
                .hero::before {
                    content: '';
                    position: absolute;
                    top: -50%; left: -50%; width: 200%; height: 200%;
                    background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 60%);
                    animation: rotate 20s linear infinite;
                }
                @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                .hero-content {
                    position: relative;
                    z-index: 10;
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto;
                }
                .hero-badge {
                    display: inline-block;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    padding: 0.5rem 1rem;
                    border-radius: 50px;
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: white;
                    margin-bottom: 2rem;
                    animation: fadeInDown 0.8s ease-out;
                }
                .hero-title {
                    font-size: 4.5rem;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    color: white;
                    font-weight: 800;
                    animation: fadeInUp 0.8s ease-out 0.2s backwards;
                }
                .hero-subtitle {
                    font-size: 1.25rem;
                    color: #cbd5e1;
                    margin-bottom: 3rem;
                    line-height: 1.6;
                    animation: fadeInUp 0.8s ease-out 0.4s backwards;
                }
                .hero-actions {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    animation: fadeInUp 0.8s ease-out 0.6s backwards;
                }
                .btn-outline-white {
                    color: white;
                    border: 2px solid white;
                    background: transparent;
                }
                .btn-outline-white:hover {
                    background: white;
                    color: #0f172a;
                }
                
                /* Feature Cards */
                .feature-cards {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2.5rem;
                    margin-top: -5rem;
                    position: relative;
                    z-index: 20;
                    padding-bottom: 4rem;
                }
                .feature-card {
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
                .feature-card:hover {
                    transform: translateY(-12px);
                    box-shadow: 0 30px 60px -10px rgba(79, 70, 229, 0.15);
                }
                .card-image-wrapper {
                    height: 160px;
                    overflow: hidden;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .card-overlay-text {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: rgba(0,0,0,0.5);
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }
                .feature-content {
                    padding: 2.5rem 2rem 2rem;
                    position: relative;
                }
                .feature-icon {
                    width: 60px;
                    height: 60px;
                    background: #eef2ff;
                    color: #4f46e5;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.8rem;
                    position: absolute;
                    top: -30px;
                    left: 2rem;
                    box-shadow: 0 10px 20px -5px rgba(79, 70, 229, 0.2);
                    border: 4px solid white;
                }
                
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* Stats Section */
                .stats-section {
                    padding: 5rem 0;
                    background: linear-gradient(to right, #ffffff, #f8fafc);
                    border-bottom: 1px solid #e2e8f0;
                    border-top: 1px solid #e2e8f0;
                }
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 3rem;
                    text-align: center;
                }
                .stat-item h3 {
                    font-size: 3rem;
                    color: #4f46e5;
                    margin-bottom: 0.5rem;
                    font-weight: 800;
                    letter-spacing: -1px;
                }
                .stat-item p {
                    color: #64748b;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-size: 0.9rem;
                }
            `}</style>
            <section className="hero">
                <div className="container hero-content">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="hero-badge">✨ The Future of Campus Life is Here</div>
                        <h1 className="hero-title">Unlock Your<br/>Campus Experience</h1>
                        <p className="hero-subtitle">Discover the most exciting hackathons, workshops, and cultural fests happening at GLA University. Connect, compete, and celebrate.</p>
                        <div className="hero-actions">
                            <Link to="/events" className="btn" style={{ padding: '1rem 2.5rem', background: 'linear-gradient(135deg, #4f46e5, #8b5cf6)', color: 'white', border: 'none', borderRadius: '50px', fontWeight: 800, fontSize: '1rem', boxShadow: '0 10px 20px -5px rgba(79, 70, 229, 0.4)', transition: 'all 0.3s' }} onMouseOver={(e) => {e.target.style.transform='translateY(-2px)'; e.target.style.boxShadow='0 15px 30px -5px rgba(79, 70, 229, 0.5)'}} onMouseOut={(e) => {e.target.style.transform='none'; e.target.style.boxShadow='0 10px 20px -5px rgba(79, 70, 229, 0.4)'}}>
                                Browse Events
                            </Link>
                            <Link to="/about" className="btn" style={{ padding: '1rem 2.5rem', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', color: 'white', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '50px', fontWeight: 800, fontSize: '1rem', transition: 'all 0.3s' }} onMouseOver={(e) => {e.target.style.background='rgba(255, 255, 255, 0.2)'}} onMouseOut={(e) => {e.target.style.background='rgba(255, 255, 255, 0.1)'}}>
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container feature-cards">
                <div className="feature-card">
                    <div className="card-image-wrapper mesh-gradient-1">
                        <div className="card-overlay-text">Coding & Tech</div>
                    </div>
                    <div className="feature-content">
                        <div className="feature-icon">🚀</div>
                        <h3>Tech Hackathons</h3>
                        <p>Join coding battles like Payload Party and AI Innovation to showcase your skills.</p>
                    </div>
                </div>
                <div className="feature-card">
                    <div className="card-image-wrapper mesh-gradient-2">
                        <div className="card-overlay-text">Music & Arts</div>
                    </div>
                    <div className="feature-content">
                        <div className="feature-icon">🎨</div>
                        <h3>Cultural Fests</h3>
                        <p>Express yourself in poetry at Kavya Sangam or perform at the Music Fest.</p>
                    </div>
                </div>
                <div className="feature-card">
                    <div className="card-image-wrapper mesh-gradient-3">
                        <div className="card-overlay-text">Workshops</div>
                    </div>
                    <div className="feature-content">
                        <div className="feature-icon">💡</div>
                        <h3>Skill Workshops</h3>
                        <p>Learn new technologies and soft skills from industry experts and seniors.</p>
                    </div>
                </div>
            </div>

            <section className="stats-section">
                <div className="container stats-grid">
                    <div className="stat-item">
                        <h3>50+</h3>
                        <p>Active Events</p>
                    </div>
                    <div className="stat-item">
                        <h3>2k+</h3>
                        <p>Students Registered</p>
                    </div>
                    <div className="stat-item">
                        <h3>10+</h3>
                        <p>Clubs & Societies</p>
                    </div>
                    <div className="stat-item">
                        <h3>₹50k+</h3>
                        <p>Prizes Won</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured Events</h2>
                        <Link to="/calendar" className="view-all">View All &rarr;</Link>
                    </div>
                    <div className="events-grid" id="featured-events">
                        {/* Events will be loaded here component wise */}
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: '#1e1b4b' }}>Why CampusConnect?</h2>
                    <p style={{ color: '#64748b', fontSize: '1.25rem', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>The ultimate tool for a vibrant university life, bringing everything to your fingertips.</p>
                    
                    <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Real-time Updates', desc: 'Instant notifications for new events and schedule changes.', icon: '⚡' },
                            { title: 'Easy Registration', desc: 'One-click registration for all university activities.', icon: '🎯' },
                            { title: 'Digital Calendar', desc: 'Sync your study schedule with campus happenings.', icon: '📅' }
                        ].map((f, i) => (
                            <div key={i} style={{ background: 'white', padding: '3rem 2rem', borderRadius: '24px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{f.icon}</div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1e293b', marginBottom: '1rem' }}>{f.title}</h3>
                                <p style={{ color: '#64748b', lineHeight: 1.6 }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
