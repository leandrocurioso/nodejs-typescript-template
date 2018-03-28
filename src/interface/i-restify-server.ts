import * as Restify from "restify";
import * as RestfiyXRequestId from "res";

export interface IRestifyMiddlewareServer {
    acceptable: string[];
    RestfiyXRequestId
}

export interface IRestifyServer {
    listen(port: number, name: string, pid: number, url: string): void;
    loadMiddleware(): void;
}
