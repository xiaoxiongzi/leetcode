const fs = require('fs')
const fileList = fs.readdirSync('.').filter((filename) => /\.js$/.test(filename) && filename !== 'total.js')
console.log(`已完成${fileList.length}道题`)