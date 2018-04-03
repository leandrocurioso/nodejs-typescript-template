import * as Restify from "restify";

export type IRestifyRequest = Restify.Request;
export type IRestifyResponse = Restify.Response;
export type IRestifyNext = Restify.Next;
export type IRestifyError = Error;
export type IRestifyServerOptions = Restify.ServerOptions;
export type IRestifyServer = Restify.Server;

export interface IRestifyPlugins {
    acceptParser(acceptables: string[]): any;
    queryParser(): any;
    bodyParser(): any;
}

export interface IRestify {
    plugins: IRestifyPlugins;
    createServer(options: Restify.ServerOptions): Restify.Server;
}
