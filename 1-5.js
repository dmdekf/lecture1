var app = require('http');
var route = app.createServer();

route.listen(3000,()=>{
    console.log('Server is starting.');
})

route.on('connection', (socket)=>{
    var addr = socket.address();
    console.log(addr);
})

route.on('request', (req, res)=>{
    console.log("client's request.");

    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    res.write("<!DOCTYPE heml>");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>RESPONSE PAGE!!</title>");
    res.write("<body>");
    res.write("<h1>response from server.</h1>");
    res.write("</body>");
    res.write("</head>");
    res.write("</html>");
    res.end();
})