import http from "http"

export function getData(): Promise<http.IncomingMessage> {
    return new Promise((resolve, reject) => {

        const request = http.request({
            hostname: "localhost",
            port: 1899,
            method: "GET",
            path: "/",
            headers: { "Content-Type": "text/plain" },
        });

        request.on("response", (response) => {
            resolve(response);
        });

        request.on("error", (error) => {
            reject(error);
        });

        request.end();
    });
}
