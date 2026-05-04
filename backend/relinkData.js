const mongoose = require('mongoose');
const User = require('./models/User');
const Event = require('./models/Event');
require('dotenv').config();

const localURI = 'mongodb://localhost:27017/campusconnect';
const cloudURI = process.env.MONGO_URI;

async function relink() {
    try {
        console.log('--- 🛡️ Starting Database Reference Repair ---');
        
        const localConn = await mongoose.createConnection(localURI).asPromise();
        const cloudConn = await mongoose.createConnection(cloudURI).asPromise();
        
        const LocalUserModel = localConn.model('User', User.schema);
        const LocalEventModel = localConn.model('Event', Event.schema);
        
        const CloudUserModel = cloudConn.model('User', User.schema);
        const CloudEventModel = cloudConn.model('Event', Event.schema);

        // 1. Map User IDs (Old -> New)
        const localUsers = await LocalUserModel.find({});
        const cloudUsers = await CloudUserModel.find({});
        const userMap = new Map();
        for (const lu of localUsers) {
            const cu = cloudUsers.find(c => 
                (lu.email && c.email === lu.email) || 
                (lu.mobile && c.mobile === lu.mobile)
            );
            if (cu) userMap.set(lu._id.toString(), cu._id.toString());
        }
        console.log(`Mapped ${userMap.size} users.`);

        // 2. Map Event IDs (Old -> New)
        const localEvents = await LocalEventModel.find({});
        const cloudEvents = await CloudEventModel.find({});
        const eventMap = new Map();
        for (const le of localEvents) {
            const ce = cloudEvents.find(c => c.title === le.title);
            if (ce) eventMap.set(le._id.toString(), ce._id.toString());
        }
        console.log(`Mapped ${eventMap.size} events.`);

        // 3. Update Events Part: registeredStudents (Old User IDs -> New User IDs)
        console.log('\nUpdating Event lists on Atlas...');
        for (const ce of cloudEvents) {
            let updated = false;
            const repairedRegs = ce.registeredStudents.map(oldId => {
                const newId = userMap.get(oldId.toString());
                if (newId) {
                    updated = true;
                    return newId;
                }
                return oldId;
            });

            if (updated) {
                ce.registeredStudents = repairedRegs;
                await ce.save();
                console.log(`  ✅ Repaired registrations for: ${ce.title}`);
            }
        }

        // 4. Update Users Part: registeredEvents (Old Event IDs -> New Event IDs)
        console.log('\nUpdating User lists on Atlas...');
        for (const cu of cloudUsers) {
            let updated = false;
            const repairedEvents = cu.registeredEvents.map(oldId => {
                const newId = eventMap.get(oldId.toString());
                if (newId) {
                    updated = true;
                    return newId;
                }
                return oldId;
            });

            if (updated) {
                cu.registeredEvents = repairedEvents;
                await cu.save();
                console.log(`  ✅ Repaired event history for user: ${cu.name}`);
            }
        }

        console.log('\n--- 🎉 Reference Repair Completed! ---');
        await localConn.close();
        await cloudConn.close();
        process.exit(0);
    } catch (err) {
        console.error('Relink failure:', err);
        process.exit(1);
    }
}

relink();
