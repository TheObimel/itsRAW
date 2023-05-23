import http from "http";

const port = 1889;
http.createServer(async function(_, res: http.ServerResponse) {
    res.writeHead(200, { "Content-Type": "text/plain" });

    //TODO: Data
    res.write(JSON.stringify({
        id: 1,
        message: "Hello World!"
    }));
    res.end('\n');

}).listen(port | 1899, () => {
    console.log(`Server listening on port: ${port}`);
});
