// your websocket server url
const url = 'ws://10.144.45.142:8080'
const connection = new WebSocket(url)

const clientId = parseInt(Math.random() * 100000000000);

connection.onopen = () => {
  connection.send('hey, I\'m calling from client #' + clientId ) 
}

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}

connection.onmessage = (e) => {
  console.log(e.data)
}