const mongoose = require('mongoose');
const Schema=mongoose.Schema;
// Define the booking schema
const bookingSchema = new mongoose.Schema({
    passengerName: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    emailAddress: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    whatsappNumber: { type: String },
    departureDate: { type: Date, required: true },
    returnDate: { type: Date, required: true },
    packageId: { type: mongoose.Schema.Types.ObjectId, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    packageName:{type:String}
    
});

// Create a model from the schema
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
