import { IRestify } from "../../interface/i-restify";
import { IServer } from "../../interface/i-server";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import Types from "../../../inversify-types";

@injectable()
class Server implements IServer {

  private _restify: IRestify;

  constructor(
    @inject("IRestify") restify: IRestify
  ) {
    this._restify = restify;
  }

  public start() {
    const restify = this._restify.createServer({
      name: "server",
      version: "v1"
    });
    console.log(restify);
  }

}

const server = new Server();
server.start();
