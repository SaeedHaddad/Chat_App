const socket = new WebSocket('ws://localhost:3000'); //we are creating a websocket object called "socket" that opens a connection on the websocket server at "ws://localhost:3000".
 //The connection is used to send and receive messages in real time

function sendMessage(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    if (input.value) {
        socket.send(input.value);
        input.value = "";
    }
    input.focus();
}

document.querySelector('form')
    .addEventListener('submit', sendMessage);

socket.addEventListener("message", ({ data }) => {
    const li = document.createElement('li');
    li.textContent = data;
    document.querySelector('ul').appendChild(li);
});
