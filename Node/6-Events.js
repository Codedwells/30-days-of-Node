//This is the Node events Main Key words include
// on--which adds the listener  emit--which emits the event
//With events the on and emitter must follow a spcific order
//Multiple on listerners can be added.
//----Params can also be included 
//events module returns a class hence the new Key Word

const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
	console.log(`This is the response for ${name} : ${id}`);
});

customEmitter.on("response", () => {
	console.log("Other logic goes here....");
});

//Params have been passed but ignored by emitter 2 which is not
//passed the arguments
customEmitter.emit("response",'Jayson',23);
