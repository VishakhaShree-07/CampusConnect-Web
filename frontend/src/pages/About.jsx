export default function About() {
    return (
        <main>
            <style>{`
                .about-page {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    background-attachment: fixed;
                    min-height: 100vh;
                }
                .about-hero {
                    background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));
                    backdrop-filter: blur(10px);
                    color: white;
                    padding: 8rem 0 6rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    margin-bottom: 3rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                }
                .about-hero::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 60%);
                    animation: rotate 25s linear infinite;
                }
                .about-hero::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 100px;
                    background: linear-gradient(to bottom, transparent, rgba(102, 126, 234, 0.3));
                }
                .about-hero h1 {
                    font-size: 4rem;
                    margin-bottom: 1.5rem;
                    position: relative;
                    z-index: 2;
                    font-weight: 800;
                    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
                    animation: fadeInDown 0.8s ease-out;
                }
                .about-hero p {
                    font-size: 1.4rem;
                    opacity: 0.95;
                    max-width: 700px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                    line-height: 1.8;
                    animation: fadeInUp 0.8s ease-out 0.2s backwards;
                }
                .about-content {
                    padding: 4rem 0 6rem;
                }
                .mission-vision {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                    margin-bottom: 6rem;
                }
                .mission-vision div {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(20px);
                    padding: 3rem;
                    border-radius: 30px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 1px solid rgba(255, 255, 255, 0.8);
                    position: relative;
                    overflow: hidden;
                }
                .mission-vision div::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    background: linear-gradient(90deg, #667eea, #764ba2);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.4s ease;
                }
                .mission-vision div:hover::before {
                    transform: scaleX(1);
                }
                .mission-vision div:hover {
                    transform: translateY(-10px) scale(1.02);
                    box-shadow: 0 30px 80px rgba(102, 126, 234, 0.3);
                    border-color: rgba(102, 126, 234, 0.5);
                }
                .mission-vision h2 {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-size: 2.2rem;
                    margin-bottom: 1.5rem;
                    font-weight: 700;
                }
                .mission-vision p {
                    color: #4a5568;
                    line-height: 1.8;
                    font-size: 1.05rem;
                }
                .team-section {
                    text-align: center;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    padding: 4rem 2rem;
                    border-radius: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                .team-section h2 {
                    color: white;
                    font-size: 2.5rem;
                    margin-bottom: 3rem;
                    font-weight: 700;
                }
                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                    gap: 2.5rem;
                    margin-top: 3rem;
                }
                .team-member {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(20px);
                    padding: 2.5rem 2rem;
                    border-radius: 28px;
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 1px solid rgba(255, 255, 255, 0.8);
                    position: relative;
                    overflow: hidden;
                }
                .team-member::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 5px;
                    background: linear-gradient(90deg, #667eea, #764ba2);
                    transform: scaleX(0);
                    transition: transform 0.4s ease;
                }
                .team-member:hover::before {
                    transform: scaleX(1);
                }
                .team-member:hover {
                    transform: translateY(-15px) scale(1.03);
                    box-shadow: 0 25px 60px rgba(102, 126, 234, 0.25);
                    border-color: rgba(102, 126, 234, 0.5);
                }
                .team-member img {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    object-fit: cover;
                    margin: 0 auto 1.5rem;
                    border: 5px solid white;
                    box-shadow: 0 8px 30px rgba(102, 126, 234, 0.3);
                    transition: all 0.4s ease;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    padding: 3px;
                }
                .team-member:hover img {
                    transform: scale(1.1) rotate(5deg);
                    box-shadow: 0 12px 40px rgba(102, 126, 234, 0.5);
                }
                .team-member h3 {
                    margin-bottom: 0.5rem;
                    color: #2d3748;
                    font-size: 1.3rem;
                    font-weight: 700;
                }
                .team-member .role {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-weight: 700;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                }
                @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes fadeInDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                @media (max-width: 768px) {
                    .mission-vision { grid-template-columns: 1fr; gap: 2rem; }
                    .about-hero h1 { font-size: 2.5rem; }
                    .about-hero p { font-size: 1.1rem; }
                }
            `}</style>

            <div className="about-page">
                <style>{`
                    .about-page { background: #f8fafc; min-height: 100vh; padding-bottom: 5rem; }
                    .about-hero {
                        background: linear-gradient(135deg, #312e81 0%, #4338ca 100%);
                        color: white; padding: 5rem 0; text-align: center; border-radius: 0 0 50px 50px;
                        box-shadow: 0 20px 40px -15px rgba(49, 46, 129, 0.3); margin-bottom: 4rem;
                    }
                    .about-hero h1 { font-size: 3.5rem; font-weight: 900; letter-spacing: -0.04em; margin-bottom: 1rem; }
                    .about-hero p { font-size: 1.25rem; opacity: 0.9; max-width: 600px; margin: 0 auto; line-height: 1.6; }
                    
                    .mission-vision {
                        display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 5rem;
                    }
                    .mv-card {
                        background: white; padding: 2.5rem; border-radius: 24px;
                        border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);
                        transition: transform 0.3s ease;
                    }
                    .mv-card:hover { transform: translateY(-5px); }
                    .mv-card h2 { color: #312e81; font-size: 1.75rem; margin-bottom: 1rem; font-weight: 800; }
                    .mv-card p { color: #64748b; line-height: 1.7; font-size: 1.05rem; }
                    
                    .team-section { text-align: center; }
                    .team-header { margin-bottom: 3.5rem; }
                    .team-header h2 { font-size: 2.5rem; font-weight: 900; color: #1e1b4b; }
                    .team-grid {
                        display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 2rem;
                    }
                    .member-card {
                        background: white; padding: 1.5rem; border-radius: 20px;
                        border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s ease;
                    }
                    .member-card:hover { transform: translateY(-8px); box-shadow: 0 20px 30px -10px rgba(0,0,0,0.1); }
                    .member-img {
                        width: 120px; height: 120px; border-radius: 50%; object-fit: cover;
                        margin: 0 auto 1.5rem; border: 4px solid #f1f5f9; box-shadow: 0 8px 15px rgba(0,0,0,0.1);
                    }
                    .member-card h3 { font-size: 1.2rem; font-weight: 800; color: #1e293b; margin-bottom: 0.25rem; }
                    .member-role { color: #4338ca; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; }
                    
                    @media (max-width: 768px) {
                        .mission-vision { grid-template-columns: 1fr; }
                        .about-hero h1 { font-size: 2.5rem; }
                    }
                `}</style>

                <section className="about-hero">
                    <div className="container">
                        <h1>Bridging the Gap</h1>
                        <p>Connecting ambitious students with the opportunities that define their professional journey.</p>
                    </div>
                </section>

                <div className="container">
                    <div className="mission-vision">
                        <div className="mv-card">
                            <h2>Our Mission</h2>
                            <p>To democratize access to campus events, ensuring every student has the visibility and ability to participate in activities that foster growth, learning, and community building.</p>
                        </div>
                        <div className="mv-card">
                            <h2>Our Vision</h2>
                            <p>Creating a fully connected campus ecosystem where no opportunity is missed and student engagement reaches its peak potential through digital innovation and collaboration.</p>
                        </div>
                    </div>

                    <div className="team-section">
                        <div className="team-header">
                            <h2>Meet the Architects</h2>
                        </div>
                        <div className="team-grid">
                            {[
                                { name: "Tanya", role: "Founder & Lead", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300" },
                                { name: "Shweta", role: "Core Member", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300" },
                                { name: "Vishakha", role: "Core Member", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300" },
                                { name: "Mani", role: "Core Member", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" },
                                { name: "Gaurika", role: "Core Member", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300" }
                            ].map((m, i) => (
                                <div key={i} className="member-card">
                                    <img src={m.img} alt={m.name} className="member-img" />
                                    <h3>{m.name}</h3>
                                    <span className="member-role">{m.role}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
