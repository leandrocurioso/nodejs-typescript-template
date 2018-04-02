import * as Restify from "restify";

export interface IRestifyServer {
    listen(port: number, name: string, pid: number, url: string): void;
    loadMiddleware(): void;
}
