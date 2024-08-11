const express = require('express');
const router = express.Router();
const bookingSchema = require('../Schema/Booking');

// Define your routes for booking related operations
router.post('/bookings', async (req, res) => {
    try {
        // Create a new booking instance using the schema
        const newBooking = new bookingSchema(req.body);
        // Save the booking to the database
        await newBooking.save();
        res.status(201).json({ message: 'Booking saved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Get all bookings
router.get('/bookings', async (req, res) => {
    try {
        // Fetch all bookings from the database
        const bookings = await bookingSchema.find();
        res.status(200).json({ success: true, data: bookings });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
