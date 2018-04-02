import { IRestneerConfig } from "./i-restneer-config";
import { IRestneerServer } from "./i-restneer-server";
import { IRestify, IRestifyServerOptions, IRestifyServer } from "../restify/i-restify";

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

  public loadMiddleware(
    acceptable: string[] = this._restneerConfig.general.acceptable
  ): void {
    this._restifyServer.use(this._restify.plugins.acceptParser(acceptable));
    this._restifyServer.use(this._restify.plugins.queryParser());
    this._restifyServer.use(this._restify.plugins.bodyParser());
    /* this.restifyServer.pre(CustomMiddleware.rejectContentType);
    // this.loadServiceRoute();
    this.restifyServer.on("NotFound", CustomMiddleware.notFound);
    this.restifyServer.on("InternalServer", CustomMiddleware.internalServer);
    this.restifyServer.pre(CustomMiddleware.verifyPermission);*/
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
