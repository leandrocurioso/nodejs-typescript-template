import { IRestneerConfig } from "./restneer.config.interface";
import { IRestneerServer, IRestneerMiddleware } from "./restneer.server.interface";
import RestfiyXRequestId from "restify-x-request-id";
import NotFoundMiddleware from "../restneer/middleware/not.found.middleware";
import InternalServerErrorMiddleware from "../restneer/middleware/internal.server.error.middleware";
import { IRestify, IRestifyServerOptions, IRestifyServer } from "../restify/restify.interface";

class RestneerServer implements IRestneerServer {

  private readonly _restify: IRestify;
  private readonly _restifyServer: IRestifyServer;
  private readonly _restneerConfig: IRestneerConfig;

  constructor(
    readonly restify: IRestify,
    readonly restneerConfig: IRestneerConfig
  ) {
    this._restify = restify;
    this._restneerConfig = restneerConfig;
    this._restifyServer = this._restify.createServer(this._restneerConfig.server);
  }

  public loadUse(
    acceptables: string[] = this._restneerConfig.general.acceptable
  ): void {
    this._restifyServer.use(this._restify.plugins.acceptParser(acceptables));
    this._restifyServer.use(this._restify.plugins.queryParser());
    this._restifyServer.use(this._restify.plugins.bodyParser());
  }

  public loadOn(
    notFound = new NotFoundMiddleware().function,
    internalServerError = new InternalServerErrorMiddleware().function
  ): void {
    this._restifyServer.on("NotFound", notFound);
    this._restifyServer.on("InternalServer", internalServerError);
  }

  public loadPre(
    restfiyXRequestId = RestfiyXRequestId.middleware,
    rejectContentType = RestfiyXRequestId.middleware,
  ): void {
    this._restifyServer.pre(restfiyXRequestId);
    this._restifyServer.pre(rejectContentType);
  }

  public listen(
    port: number = this._restneerConfig.general.port,
    name: string = this._restifyServer.name,
    pid: number = process.pid
  ): void {
    this._restifyServer.listen(port, () => console.log("[%s][%s] - Listening at %s", name, pid, this._restifyServer.url));
  }

}

export default RestneerServer;
