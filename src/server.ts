import http from "http";

const server = http.createServer(function(_, res: http.ServerResponse) {
    res.writeHead(200);
    res.write("Hello World!\nLet's have some fun\n");
    res.end();
});

const port = 8081;
server.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
