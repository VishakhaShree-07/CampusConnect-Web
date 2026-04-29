require('dotenv').config({path: './.env'});
const mongoose = require('mongoose');
const sendEmail = require('./utils/sendEmail');

mongoose.connect(process.env.MONGO_URI).then(async () => {
    try {
        const User = require('./models/User');
        const users = await User.find({ email: { $exists: true, $ne: null } }, 'email name');
        console.log('Found users:', users.map(u => u.email));
        
        const emailPromises = users.filter(user => user.email).map(user => {
            console.log('Sending to', user.email);
            return sendEmail({
                email: user.email,
                subject: 'Test from backend script',
                message: 'Hello',
                html: '<p>Hello</p>'
            });
        });
        
        await Promise.all(emailPromises);
        console.log('All sent');
    } catch (err) {
        console.error('Email broadcast failed:', err);
    } finally {
        mongoose.disconnect();
    }
});
