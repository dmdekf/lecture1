// http를 활용하여 request를 하는 방법
var app = require('http');
var route = app.createServer();

route.listen(3000, ()=>{
    console.log('server is starting.');
})
route.on('connection', (socket)=>{
    var addr = socket.address()
    console.log("웹클라이언트에 접속중 %s : %d", addr.address, addr.port);
    console.log(addr);
})

route.on('request', (req, res)=>{
    console.log(req);
})






