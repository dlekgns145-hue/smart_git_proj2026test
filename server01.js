const http = require('http');

const server =http.createServer(function(req,res) {
    res.end("Hello node world");
});


server.listen(3000, function(){
    console.log('3000번 포트로 Node.js 서버 실행 중 ...');
});
