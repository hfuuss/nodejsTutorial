const fs = require('fs')
const net = require('net')
const filename = process.argv[2]

if(!filename) {
  throw Error('Error: No filename specified.')
}

net.createServer(connection => {
  console.log('subcriber connected.')
  connection.write(JSON.stringify({type: 'watching', file: filename}) + '\n')

  const watcher = fs.watch(filename, () => connection.write(JSON.stringify({type: 'changed', timestamp: Date.now()})+ '\n'))

  connection.on('close', () => {
    console.log('Subscriber disconnected. ')
    watcher.close()
  })
}).listen(60300,() => {console.log('Listen for subscribers...')})