const net = require('net')
const netClient = net.connect({port: 60300})
const ldjClient = require('./lib/ldj-client.js').connect(netClient)

ldjClient.on('message', message => {
  // const message = JSON.parse(data)
  if(message.type === 'watching') {
    console.log(`Now watching: ${message.file}`)
  } else if(message.type === 'changed') {
    const date = new Date(message.timestamp)
    console.log(`File changed: ${date}`)
  } else {
    console.log(`未注册消息类型 : ${message.type}`)
  }
})
