import http from "http";

const port = 1911;
http.createServer(function(_, res: http.ServerResponse) {
    res.writeHead(200, { "Content-Type": "text/plain" });

    //send data
    const message = {
        id: 1,
        message: "Hello World!\nLet's have some fun\n"
    }

    res.write(JSON.stringify(message));
    res.write("\n");

    res.end();
}).listen(port | 1911, () => {
    console.log(`Server listening on port: ${port}`);
});
