import RestifyServer from "./restify-server";
import { IFactorySync } from "./interface/i-factory";
import { IRestneerConfigGeneral, IRestneerConfigServer } from "./interface/i-restneer-config";
import * as Restify from "restify";

class RestifyServerFactory implements IFactorySync<RestifyServer> {

  public getInstance(): RestifyServer {
    const serverOptions: IRestneerConfigServer = {
      name: "Server001",
      version: "v1",
      url: "localhost"
    };

    const generalOptions: IRestneerConfigGeneral = {
      port: 5000,
      acceptable: ["application/json"],
      dirRoot: "",
      nodeEnv: "development",
    };

    return new RestifyServer(
      Restify,
      {
        server: serverOptions,
        general: generalOptions
      }
    );
  }

}

export default RestifyServerFactory;
