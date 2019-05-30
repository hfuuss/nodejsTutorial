const fs = require('fs')
const path = require('path')
const spawn = require('child_process').spawn
const filename = process.argv[2]

if(!filename) {
  console.log('未指定文件名')
}
const pathName = path.resolve(__dirname,filename)
fs.watch(pathName,() => {
  const ls = spawn('ls',['-l','-h',pathName])
  ls.stdout.pipe(process.stdout)
  // console.log('file changed')
})
console.log(`Now watching ${filename} for changes... `)