const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Workshop', 'Hackathon', 'Seminar', 'Cultural', 'Other'],
        default: 'Other'
    },
    capacity: {
        type: Number,
        default: 100
    },
    imageUrl: {
        type: String,
        default: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop'
    },
    registeredStudents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
