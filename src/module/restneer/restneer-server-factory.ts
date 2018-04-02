import RestneerServer from "./restneer-server";
import { IFactoryOptions, IFactorySync } from "./interface/i-factory";
import { IRestneerConfigGeneral } from "./interface/i-restneer-config";
import { IRestifyServerOptions } from "./interface/i-restify";
import * as Restify from "restify";

class RestneerServerFactory implements IFactorySync<RestneerServer> {

  public getInstance(options?: IFactoryOptions): RestneerServer {
    const serverOptions: IRestifyServerOptions = {
      name: "Server001",
      version: "v1"
    };

    const generalOptions: IRestneerConfigGeneral = {
      port: 5000,
      acceptable: ["application/json"],
      dirRoot: "",
      nodeEnv: "development",
    };

    return new RestneerServer(
      Restify,
      {
        server: serverOptions,
        general: generalOptions
      }
    );
  }

}

export default RestneerServerFactory;
