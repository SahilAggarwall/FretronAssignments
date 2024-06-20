const express = require('express');
const router = express.Router();
const Distance = require('../models/distance');
const haversine = require('../utils/haversine');

// API endpoint to calculate distance
router.post('/distance', async (req, res) => {
    const { origin, destination } = req.body;

    // Check if distance is already calculated
    const existingDistance = await Distance.findOne({ origin, destination });
    if (existingDistance) {
        return res.json({ distance: existingDistance.distance });
    }

    // Calculate distance using Haversine formula
    const distance = haversine(origin, destination);

    // Save the calculated distance to the database
    const newDistance = new Distance({ origin, destination, distance });
    await newDistance.save();

    res.json({ distance });
});

module.exports = router;
