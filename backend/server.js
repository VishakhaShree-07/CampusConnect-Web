require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected to Atlas'))
    .catch(err => console.log('MongoDB Connection Error:', err));


app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is running' });
});

app.get('/api/debug-env', (req, res) => {
    res.json({ emailUser: process.env.EMAIL_USER || 'NOT_SET', hasPass: !!process.env.EMAIL_PASS });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
