// Import Mongoose module
const mongoose = require('mongoose');

// Define package schema
const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  }
});

// Create Package model
const Package = mongoose.model('Package', packageSchema);

// Export the Package model
module.exports = Package;
