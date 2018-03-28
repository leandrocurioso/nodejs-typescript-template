import { IRestneerConfig } from "./interface/i-restneer-config";
import { IRestifyServer } from "./interface/i-restify-server";
import { IRestify } from "./interface/i-restify";
import * as Restify from "restify";

class RestifyServer implements IRestifyServer {

  private readonly _restify: IRestify;
  private readonly _restifyServer: Restify.Server;
  private readonly _restneerConfig: IRestneerConfig;

  constructor(
    readonly restify: IRestify = Restify,
    readonly restneerConfig: IRestneerConfig
  ) {
    this._restify = restify;
    this._restneerConfig = restneerConfig;
    this._restifyServer = this._restify.createServer(this._restneerConfig.server);
  }

  public listen(
    port: number = this._restneerConfig.general.port,
    name: string = this._restifyServer.name,
    pid: number = process.pid,
    url: string = this._restifyServer.url
  ): void {
    this._restifyServer.listen(port, () => console.log("[%s][%s] - Listening at %s", name, pid, url));
  }

  public loadMiddleware(
    acceptable: string[] = this._restneerConfig.general.acceptable
  ): void {
    this._restifyServer.use(Restify.plugins.acceptParser(acceptable));
    this._restifyServer.use(Restify.plugins.queryParser());
    this._restifyServer.use(Restify.plugins.bodyParser());
    /*this.restifyServer.pre(RestfiyXRequestId.middleware);
    this.restifyServer.pre(CustomMiddleware.rejectContentType);
    // this.loadServiceRoute();
    this.restifyServer.on("NotFound", CustomMiddleware.notFound);
    this.restifyServer.on("InternalServer", CustomMiddleware.internalServer);
    this.restifyServer.pre(CustomMiddleware.verifyPermission);*/
  }

}

export default RestifyServer;
