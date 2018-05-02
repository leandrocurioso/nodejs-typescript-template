import RestneerServer from "./restneer.server";
import { IFactoryOptions, IFactorySync } from "../../interface/factory.interface";
import { IRestneerConfigGeneral } from "./restneer.config.interface";
import { IRestifyServerOptions } from "../restify/restify.interface";
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
