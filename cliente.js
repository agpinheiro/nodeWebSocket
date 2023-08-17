const WebSocket = require('ws');
const readline = require('readline');

const socket = new WebSocket('ws://localhost:8080');

socket.on('open', () => {
  console.log('Conectado');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function sendMessage() {
    rl.question('', (message) => {
      if (message === 'exit') {
        socket.close();
        rl.close();
        return;
      }

      socket.send(message);
      sendMessage();
    });
  }

  sendMessage();

  socket.on('message', (message) => {
    console.log(`${message}`);
  });
});

socket.on('close', () => {
  console.log('Conexão com o servidor fechada');
});
