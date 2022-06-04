const fs = require('fs');
const path = require('path');

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, './index.html'),'utf-8',(err, data) => {
    if (err) 
        return console.error(err)
    // 定义三个方法
    
    resolveCSS(data)
    resolveJS(data)
    resolveHTML(data)
})

function resolveCSS(htmlString) {
    const r1 = regStyle.exec(htmlString)
}