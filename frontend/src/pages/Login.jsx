import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const user = await login(email, password);
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
                    <h2>Welcome Back</h2>
                    <p>Login to access your dashboard</p>
                </div>
                {error && <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="student@gla.ac.in" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="••••••••" required />
                    </div>
                    <button type="submit" className="btn-block">Sign In</button>
                </form>
                <div className="auth-footer">
                    <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
                    <p style={{marginTop: '1rem'}}><Link to="/">← Back to Home</Link></p>
                </div>
            </div>
        </div>
    );
}
