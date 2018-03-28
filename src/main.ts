import * as Restify from "restify";
import RestifyServer from "./restify-server";
import RestifyServerFactory from "./restify-server-factory";

class Main {

    public static run(
        restifyServer: RestifyServer = new RestifyServerFactory().getInstance()): void {
        try {
            restifyServer.loadMiddleware();
            restifyServer.listen();
        } catch (err) {
            throw err;
        }
    }
}

Main.run();
