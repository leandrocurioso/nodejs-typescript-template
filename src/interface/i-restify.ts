import * as Restify from "restify";

export interface IRestify {
    createServer(options: Restify.ServerOptions): Restify.Server;
}
