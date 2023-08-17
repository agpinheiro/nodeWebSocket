const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

const clients = new Set();
const clientNames = new Map(); // Usado para armazenar os nomes dos clientes

server.on('connection', (socket) => {
  console.log('Cliente conectado');

  // Solicitar ao cliente que digite seu nome
  socket.send('Por favor, digite seu nome:');

  socket.on('message', (message) => {
    if (!clientNames.has(socket)) {
      // Se ainda não tiver o nome, armazenar na mapa e adicionar na lista de clientes
      clientNames.set(socket, message);
      clients.add(socket);
      console.log(`Cliente ${message} conectado`);
      socket.send(`Olá, ${message}! Você está conectado.\nDigite suas mensagens.`);
    } else {
      console.log(`Mensagem recebida de ${clientNames.get(socket)}: ${message}`);

      // Encaminhar a mensagem para todos os outros clientes conectados
      for (const client of clients) {
        if (client !== socket && client.readyState === WebSocket.OPEN) {
          client.send(`${clientNames.get(socket)}: ${message}`);
        }
      }
    }
  });

  socket.on('close', () => {
    const clientName = clientNames.get(socket);
    clients.delete(socket);
    clientNames.delete(socket);
    console.log(`Cliente ${clientName} desconectado`);
  });
});
