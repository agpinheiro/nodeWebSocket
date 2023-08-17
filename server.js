const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

const clients = new Set();

server.on('connection', (socket) => {
  console.log('Cliente conectado');

  clients.add(socket);

  socket.on('message', (message) => {
    console.log(`Mensagem recebida de um cliente: ${message}`);

    // Encaminhar a mensagem para todos os outros clientes conectados
    for (const client of clients) {
      if (client !== socket && client.readyState === WebSocket.OPEN) {
        client.send(`Cliente disse: ${message}`);
      }
    }
  });

  socket.on('close', () => {
    clients.delete(socket);
    console.log('Cliente desconectado');
  });
});
