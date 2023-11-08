const fs = require('fs');
const { EventModel } = require('../models/eventModel');

// Function to log an event to MongoDB
function logEventToMongoDB(eventName, eventMethod) {
    // Create a new document in the 'Event' collection with event details
    EventModel.create({
        event: eventName,
        eventMethod: eventMethod,
        triggerTime: new Date(), // Current timestamp
    });
}

// Function to log an event to the app.log file
function logEventToFile(eventName, eventMethod) {
    // Create a log entry with event details and a timestamp
    const logEntry = `${eventName} -->\t\t${eventMethod}\t\t${new Date()}\n`;

    // Append the log entry to the 'app.log' file
    fs.appendFile('app.log', logEntry, (err) => {
        if (err) {
            console.error('Error writing to app.log:', err);
        }
    });
}

module.exports = { logEventToMongoDB, logEventToFile };
