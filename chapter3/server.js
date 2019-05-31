const net = require('net')
const server = net.createConnection(connection => {
  console.log(connection)
})
server.listen(3000)
