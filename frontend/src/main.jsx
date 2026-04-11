import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/main.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/responsive.css';
import './styles/mesh.css';
import './styles/auth.css'; // Just keeping it here in case

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
