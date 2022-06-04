const fs = require('fs')

fs.writeFile('./2.txt','hello',function(err,dataStr){
    console.log(err)
    console.log('-------');
    console.log(dataStr)
})