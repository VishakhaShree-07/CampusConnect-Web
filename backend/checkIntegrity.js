const mongoose = require('mongoose');
require('dotenv').config();
const Event = require('./models/Event');
const User = require('./models/User');

async function check() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to Atlas');

        const events = await Event.find({ registeredStudents: { $exists: true, $not: { $size: 0 } } });
        console.log(`Found ${events.length} events with registrations.`);

        for (const event of events) {
            console.log(`\nEvent: ${event.title}`);
            for (const studentId of event.registeredStudents) {
                const user = await User.findById(studentId);
                if (user) {
                    console.log(`  ✅ Found student: ${user.name}`);
                } else {
                    console.log(`  ❌ Student ID ${studentId} NOT FOUND in Atlas Users.`);
                }
            }
        }
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
check();
