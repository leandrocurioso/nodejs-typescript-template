import * as Restify from "restify";

export interface IRestifyServer extends Restify.Server {}

export interface IRestifyServerOptions extends Restify.ServerOptions {}

export interface IRestifyPlugins {
    acceptParser(acceptables: string[]): any;
    queryParser(): any;
    bodyParser(): any;
}

export interface IRestify {
    plugins: IRestifyPlugins;
    createServer(options: Restify.ServerOptions): Restify.Server;
}
