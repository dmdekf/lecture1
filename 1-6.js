var app = require('http');
var fs = require('fs');
var route = app.createServer();
var port = 3000;

route.listen(port, ()=>{
    console.log("server starting.");
})
route.on("connection",(socket)=>{
    var addr = socket.address();
    console.log(addr);
})
route.on('request', (req, res)=>{
    console.log("정상 요청.");
    var filename = "jang.jpeg"
    var infile = fs.createReadStream(filename, {flags:'r'})
    infile.pipe(res)
})









