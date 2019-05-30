const fs = require('fs')
const path = require('path')


fs.readFile(path.resolve(__dirname,'target.txt'),(err,data) => {
  if(err) {
    throw err;
  }
  console.log('ss',data.toString())
})