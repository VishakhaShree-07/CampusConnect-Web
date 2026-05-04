const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User.js');

dotenv.config();

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        const adminExists = await User.findOne({ email: 'admin@gla.ac.in' });


        if (adminExists) {
            console.log('Admin already exists');
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash('admin123', salt);

            await User.create({
                name: 'System Admin',
                email: 'admin@gla.ac.in',
                password: hashedPassword,
                role: 'admin'
            });

            console.log('Default admin seeded: admin@gla.ac.in / admin123');
        }
        process.exit();
    } catch (error) {
        console.error('Error seeding admin', error);
        process.exit(1);
    }
};

seedAdmin();
