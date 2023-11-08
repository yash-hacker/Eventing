const { logEventToMongoDB, logEventToFile } = require("./src/utils/logger");

class Events {
  constructor() {
    this.eventHandler = {};
  }

  // Register an event
  on(eventName, callback) {
    if (!this.eventHandler[eventName]) {
      this.eventHandler[eventName] = [callback];
    } else {
      this.eventHandler[eventName].push(callback);
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    const callbacks = this.eventHandler[eventName] || [];
    callbacks.forEach((callback) => {
      callback();
    });

    // Log event to MongoDB and app.log
    logEventToMongoDB(eventName, "Trigger");
    logEventToFile(eventName, "Trigger");
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.eventHandler[eventName];
    logEventToMongoDB(eventName, "Off");
    logEventToFile(eventName, "Off");
  }
}

module.exports = Events;
