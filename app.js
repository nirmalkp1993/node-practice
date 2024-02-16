const Event = require("events");
const newEvent = new Event();

newEvent.on("messageLogged", (arg) => {
  console.log("message", arg);
});

newEvent.emit("messageLogged", { id: "34", url: "www.hrq.com" });
