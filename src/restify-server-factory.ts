import RestifyServer from "./restify-server";
import { IFactorySync } from "./interface/factory/i-factory-sync";
import * as Restify from "restify";

class RestifyServerFactory implements IFactorySync<RestifyServer> {

  public getInstance(): RestifyServer {
    return new RestifyServer(
      Restify,
      {
        server: {
          name: "Server001",
          version: "v1"
        },
        general: {
          port: 6000,
          acceptable: ["application/json"],
          dirRoot: "",
          nodeEnv: "development",
        }
      }
    );
  }

}

export default RestifyServerFactory;
