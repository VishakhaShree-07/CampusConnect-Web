require('dotenv').config({ path: './.env' });
const sendEmail = require('./utils/sendEmail');

const testEmail = async () => {
    try {
        console.log('Testing email configuration...');
        console.log('EMAIL_USER:', process.env.EMAIL_USER);
        // Do not log password for security, just check if it exists
        console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.log('Error: EMAIL_USER or EMAIL_PASS is missing in .env file.');
            return;
        }

        await sendEmail({
            email: process.env.EMAIL_USER, // Send to self
            subject: 'Test Email from CampusConnect',
            message: 'If you are seeing this, your email configuration is working perfectly!',
            html: '<p>If you are seeing this, your <strong>email configuration</strong> is working perfectly!</p>'
        });
        
        console.log(`Test email sent successfully to ${process.env.EMAIL_USER}!`);
        console.log('Please check your inbox (and spam folder) for that specific email address.');
    } catch (error) {
        console.error('Failed to send test email. Error details:');
        console.error(error);
    }
};

testEmail();
