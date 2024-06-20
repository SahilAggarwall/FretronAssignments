const mongoose = require('mongoose');

const distanceSchema = new mongoose.Schema({
    origin: {
        type: [Number], // [latitude, longitude]
        required: true
    },
    destination: {
        type: [Number], // [latitude, longitude]
        required: true
    },
    distance: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Distance', distanceSchema);
