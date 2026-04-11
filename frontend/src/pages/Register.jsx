import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Register() {
    const navigate = useNavigate();
    const { register } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const user = await register(name, email, password);
            if (user.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/dashboard');
            }
        } catch (err) {
            setError(err);
        }
    };

    return (
        <div className="auth-page" style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', padding: '2rem'}}>
            <div className="auth-container">
                <div className="auth-header">
                    <h2>Create Account</h2>
                    <p>Join CampusConnect today</p>
                </div>
                {error && <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="student@gla.ac.in" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="••••••••" required />
                    </div>
                    <button type="submit" className="btn-block">Sign Up</button>
                </form>
                <div className="auth-footer">
                    <p>Already have an account? <Link to="/login">Sign In</Link></p>
                    <p style={{marginTop: '1rem'}}><Link to="/">← Back to Home</Link></p>
                </div>
            </div>
        </div>
    );
}

