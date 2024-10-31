const ws = require("ws"); //we import Server class from ws library


// Creating a new WebSocket server instance on port 3000.
// Here, we use `ws.Server` to reference the `Server` class within the `ws` module.
const server = new ws.Server({ port: "3000" });

//this is called a connection handler 
// "connection" is the name of the event, triggered when a client establishes a connection to the server.
// socket is an arrow function that is executed each time a connection is established
server.on("connection", socket => { //this line sets up an event listener for the "connection" event, which is triggered whenever a client successfully connects to the websocket


    //"message" is the name of the event, it triggers when a message is received from the client.
    //message is an arrow function that is executed each time a mesage is received.
  socket.on("message", message => { // this line adds an event listener to the socket object to handle incoming messages from the connected client
    console.log(message)
    socket.send(`${message}`); //this sendsthe received message back to the client as a response 

  });
});
