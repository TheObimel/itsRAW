import http from "http"

export default function apiCall() {
    return new Promise((resolve, reject) => {

        const req = http.request({
            hostname: "localhost",
            port: 1911,
            path: "/",
            method: "GET",
            headers: { "Content-Type": "plain/text" },
        });

        req.on("response", (res) => {
            resolve(res);
        });

        req.on("error", (err) => {
            reject(err);
        });

        req.end();
    });
}
