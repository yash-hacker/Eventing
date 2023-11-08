const Events = require("./eventing");

const testEvent = new Events();

function cb1() {
  console.log("cb1");
}
const cb2 = () => {
  console.log("cb2");
};
const cb3 = () => {
  console.log("cb3");
};

//Register Events
testEvent.on("click", cb1);
testEvent.on("click", cb2);
testEvent.on("scroll", cb3);
testEvent.on("press", () => {
  console.log("play logs");
});

//Trigger Events
testEvent.trigger("click");
testEvent.trigger("scroll");
testEvent.trigger("press");

// Remove Events
testEvent.off("click");
