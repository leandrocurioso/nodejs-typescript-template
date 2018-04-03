import { IRestifyRequest, IRestifyResponse, IRestifyNext, IRestifyError  } from "../restify/i-restify";

export interface IRestneerServer {
    listen(port: number, name: string, pid: number): void;
    loadUse(acceptables: string[]): void;
    loadOn(notFound: Function, internalServerError: Function): void;

}

/*
this._restifyServer.use(this._restify.plugins.acceptParser(acceptables));
this._restifyServer.use(this._restify.plugins.queryParser());
this._restifyServer.use(this._restify.plugins.bodyParser());*/

export interface IRestneerMiddleware {
    function(req: IRestifyRequest, res: IRestifyResponse, next: IRestifyNext): void;
}

export interface IRestneerMiddlewareError {
    function(req: IRestifyRequest, res: IRestifyResponse, err: IRestifyError): void;
}
