require('dotenv').config()
const mongoose = require('mongoose');

// Connect to the MongoDB database using the provided connection string
mongoose.connect(process.env.MONGODB_URI); 

// Define the schema for the 'events' collection
const eventSchema = new mongoose.Schema({
  event: String,
  eventMethod: String,
  triggerTime: Date,
});

// Create a model for the 'Event' collection based on the defined schema
const EventModel = mongoose.model('Event', eventSchema);

// Export the Event model
module.exports = {EventModel};
