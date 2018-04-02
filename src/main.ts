import RestneerServer from "./restneer-server";
import RestneerServerFactory from "./restneer-server-factory";

class Main {

    public static run(
        restneerServer: RestneerServer = new RestneerServerFactory().getInstance()): void {
        try {
            restneerServer.loadMiddleware();
            restneerServer.listen();
        } catch (err) {
            throw err;
        }
    }
}

Main.run();
