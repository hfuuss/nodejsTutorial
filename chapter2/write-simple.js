const fs = require('fs')
const path = require('path')

fs.writeFile(path.resolve(__dirname,'target.txt'),'这是写入的内容',err => {
  if (err) {
    throw err;
  }
  console.log('写入文件成功')
})