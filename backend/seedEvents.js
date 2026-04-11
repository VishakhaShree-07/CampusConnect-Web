const mongoose = require('mongoose');
const Event = require('./models/Event');
require('dotenv').config();

const events = [
  {
    title: "AI & Machine Learning Workshop",
    description: "Deep dive into neural networks and LLMs with hands-on labs.",
    date: new Date("2026-04-25T10:00:00"),
    location: "Tech Lab 101",
    type: "Workshop",
    capacity: 60,
    imageUrl: "https://images.unsplash.com/photo-1591453089816-0fbb971bac45?w=800&auto=format&fit=crop"
  },
  {
    title: "National Level Hackathon 2026",
    description: "48 hours of non-stop innovation and building solutions for climate change.",
    date: new Date("2026-05-15T09:00:00"),
    location: "Main Auditorium",
    type: "Hackathon",
    capacity: 300,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop"
  },
  {
    title: "The Future of Web3 Seminar",
    description: "Experts discuss decentralization, blockchain, and the next gen of internet.",
    date: new Date("2026-04-20T14:00:00"),
    location: "Seminar Hall B",
    type: "Seminar",
    capacity: 150,
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop"
  },
  {
    title: "Spring Cultural Fest",
    description: "A celebration of music, dance, and arts with various competitions.",
    date: new Date("2026-05-02T16:00:00"),
    location: "Open Air Stage",
    type: "Cultural",
    capacity: 1000,
    imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop"
  },
  {
    title: "Cyber Security & Ethical Hacking",
    description: "Protecting systems and networks from digital attacks.",
    date: new Date("2026-06-10T11:00:00"),
    location: "Computer Center",
    type: "Workshop",
    capacity: 80,
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop"
  },
  {
    title: "Cloud Computing Summit",
    description: "Best practices for AWS, Azure, and Google Cloud infrastructure.",
    date: new Date("2026-05-20T10:00:00"),
    location: "Room 405",
    type: "Seminar",
    capacity: 200,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop"
  },
  {
    title: "UI/UX Design Masterclass",
    description: "Crafting exceptional user experiences through research and design.",
    date: new Date("2026-04-28T14:00:00"),
    location: "Design Studio",
    type: "Workshop",
    capacity: 45,
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop"
  },
  {
    title: "Inter-College Music Night",
    description: "Battle of the bands featuring talent from 10 different colleges.",
    date: new Date("2026-05-30T18:00:00"),
    location: "Central Playground",
    type: "Cultural",
    capacity: 1500,
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop"
  },
  {
    title: "Data Science with Python",
    description: "From data cleaning to predictive modeling using Scikit-learn.",
    date: new Date("2026-06-25T09:30:00"),
    location: "Lab 3",
    type: "Workshop",
    capacity: 55,
    imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop"
  },
  {
    title: "Entrepreneurs' Meetup",
    description: "Networking session for student startups and potential investors.",
    date: new Date("2026-05-05T15:00:00"),
    location: "Incubation Center",
    type: "Other",
    capacity: 120,
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop"
  },
  {
    title: "Full Stack Development Bootcamp",
    description: "Accelerated learning for React, Node.js, and MongoDB.",
    date: new Date("2026-07-01T10:00:00"),
    location: "Tech Annex",
    type: "Workshop",
    capacity: 70,
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop"
  },
  {
    title: "Fintech & Open Banking Expo",
    description: "Demo day for innovations in financial technology.",
    date: new Date("2026-08-12T10:00:00"),
    location: "Conference Hall",
    type: "Seminar",
    capacity: 250,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
  },
  {
    title: "Annual Drama Performance",
    description: "A theatrical production of classic and modern plays.",
    date: new Date("2026-09-15T19:00:00"),
    location: "Grand Auditorium",
    type: "Cultural",
    capacity: 600,
    imageUrl: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop"
  },
  {
    title: "Blockchain Developers' Hackathon",
    description: "Building smart contracts and dApps on Ethereum.",
    date: new Date("2026-07-15T09:00:00"),
    location: "Innovation Hub",
    type: "Hackathon",
    capacity: 180,
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?w=800&auto=format&fit=crop"
  },
  {
    title: "Leadership & Soft Skills Seminar",
    description: "Preparing students for corporate leadership roles.",
    date: new Date("2026-06-05T14:00:00"),
    location: "Seminar Hall A",
    type: "Seminar",
    capacity: 300,
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
  },
  {
    title: "Digital Art & Illustration Workshop",
    description: "Introduction to digital painting and vector graphics.",
    date: new Date("2026-08-20T11:00:00"),
    location: "Fine Arts Block",
    type: "Workshop",
    capacity: 40,
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop"
  },
  {
    title: "Alumni Homecoming 2026",
    description: "Reconnect with your batchmates and the campus.",
    date: new Date("2026-12-20T10:00:00"),
    location: "Main Lawn",
    type: "Other",
    capacity: 2000,
    imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop"
  },
  {
    title: "Technical Quiz Championship",
    description: "Show off your tech knowledge in this fast-paced quiz.",
    date: new Date("2026-05-18T15:30:00"),
    location: "Room 102",
    type: "Other",
    capacity: 150,
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop"
  },
  {
    title: "Career in Game Development",
    description: "Roadmap to becoming a professional game dev with Unity and Unreal.",
    date: new Date("2026-09-05T14:00:00"),
    location: "AV Room",
    type: "Seminar",
    capacity: 100,
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop"
  },
  {
    title: "Campus Photography Exhibition",
    description: "Displaying the best shots captured by student photographers.",
    date: new Date("2026-10-10T10:00:00"),
    location: "Art Gallery",
    type: "Cultural",
    capacity: 400,
    imageUrl: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&auto=format&fit=crop"
  },
  {
    title: "IoT Solutions Competition",
    description: "Build innovative Internet of Things projects for smart campus.",
    date: new Date("2026-06-30T10:00:00"),
    location: "Robotics Lab",
    type: "Hackathon",
    capacity: 100,
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop"
  },
  {
    title: "Mobile App Dev Masterclass",
    description: "Build cross-platform apps with Flutter and React Native.",
    date: new Date("2026-07-20T10:00:00"),
    location: "Computer Lab 4",
    type: "Workshop",
    capacity: 60,
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop"
  }
];

const seedEvents = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/campusconnect');
        console.log('Connected to MongoDB for seeding...');

        // Clear existing events for a clean slate
        await Event.deleteMany({});
        console.log('Cleared existing events.');

        await Event.insertMany(events);
        console.log('Successfully added 22 different events with unique images!');

        mongoose.connection.close();
        process.exit();
    } catch (error) {
        console.error('Error seeding events:', error);
        process.exit(1);
    }
};

seedEvents();
