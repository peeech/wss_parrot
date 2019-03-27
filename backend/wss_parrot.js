const WebSocket = require('ws')
const port = 4141;
const wss = new WebSocket.Server({ port: port })

console.log('Started wss server on port ' + port);
wss.on('connection', (ws, req) => {
  console.log((new Date()).toJSON().slice(0, 19).replace(/[-T]/g, ':') + ' Client opened connection');

  ws.on('message', message => {
    console.log(`Received message form client => ${message}`)
    let i = 1;
    const int = setInterval(() => {
      try {
        ws.send('Connected for ' + i++ + 's');
      } catch (e) {
        console.log((new Date()).toJSON().slice(0, 19).replace(/[-T]/g, ':') + ' Client closed connection.');
        clearInterval(int);
      }
    }, 1000);
  })

  ws.send('Connected to wss server at ' + req.headers.host);
})