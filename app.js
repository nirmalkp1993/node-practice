const Event = require("events");
const newEvent = new Event();

newEvent.on("messageLogged", () => {
  console.log("message");
});

newEvent.emit("messageLogged");
