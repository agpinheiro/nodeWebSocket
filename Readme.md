# Aplicação de Chat com WebSockets

Esta é uma aplicação simples de chat em tempo real usando WebSockets em Node.js.

## Funcionalidades
    Os clientes podem se conectar ao servidor WebSocket.
    Os clientes podem enviar e receber mensagens em tempo real.
    As mensagens são encaminhadas para todos os outros clientes conectados.
    Os nomes dos clientes são exibidos junto com suas mensagens.

### Pré-requisitos

- Node.js instalado

    Clone este repositório para sua máquina local:

   ```bash
   git clone https://github.com/agpinheiro/nodeWebSocket.git
   cd nodeWebSocket

## Como Usar:

1. **Instalação das dependências:**

   npm install

2. **Iniciar o servidor WebSocket:**

   node server.js

3. **Abrir terminais separados para cada cliente e iniciar os clientes:**

    *obs: podem ser abertos N clientes*

   node client.js

4. **Digitar os nomes dos clientes quando solicitado e começar a conversar.**

5. **Digitar "exit" em um cliente para sair da aplicação.**

# Bibliotecas Utilizadas:

- ws (https://www.npmjs.com/package/ws) - Biblioteca WebSocket para Node.js

Contribuição:

Contribuições são bem-vindas! Sinta-se à vontade para criar um Pull Request.

Licença:

Este projeto está licenciado sob a Licença MIT.
