const socket = new WebSocket('ws://localhost:3000'); //we are creating a websocket object called "socket" that opens a connection on the websocket server at "ws://localhost:3000".
//The connection is used to send and receive messages in real time

function sendMessage(e) { // we created a function name sendMessage that receives an event
    e.preventDefault(); 
    // e.preventDefault() prevents the default form submission, 
    // (allowing us to handle the submission with JavaScript 
    // without reloading the page), enabling a smoother user experience.
    
    const input = document.querySelector('input'); //selects the input element where the user types their message
    if (input.value) { //checks if the "input" field has any text to send. 
        socket.send(input.value); //it exists! send it
        input.value = ""; //after sending it, erase the value inside "input"
    }
    input.focus(); //if there are no text to send, put the cursor back in the input field
}

document.querySelector('form') // selects the "form" element
    .addEventListener('submit', sendMessage); //adds a "submit" event listener, that triggers the "sendMessage" function whenever the form is submitted.

socket.addEventListener("message", ({ data }) => {//sets up an event listener for incoming WebSocket messages from the server. Each time a message is received, it triggers this function
    const li = document.createElement('li');//creates a new list item "<li>" element.
    li.textContent = data;// sets the content of the list item to the reveived message (data)
    document.querySelector('ul').appendChild(li); // adds the new list item to a <ul> element on the page, displaying the incoming message to the user.
});
