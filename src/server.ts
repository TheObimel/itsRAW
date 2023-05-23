import http from "http";
import { getData } from "./api/serviceCall";

async function consume() {
    try {
        const res = await getData();
        await handler(res);
    } catch (err) {
        console.log("Whyyyyyyyyyy Bob", err);
    }
}

function handler(response: http.IncomingMessage) {
    return new Promise((resolve, reject) => {
        //Do my thing here

        response.on("data", (chunk) => {
            resolve(chunk);
        });

        response.on("end", () => { });

        response.on("error", (err) => {
            reject(err);
        });
    });
}

consume();
