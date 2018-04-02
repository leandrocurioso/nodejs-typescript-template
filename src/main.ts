import RestneerServer from "./module/restneer/restneer-server";
import RestneerServerFactory from "./module/restneer/restneer-server-factory";

class Main {

    public static run(
        restneerServer: RestneerServer = new RestneerServerFactory().getInstance()
    ): void {
        try {
            restneerServer.loadMiddleware();
            restneerServer.listen();
        } catch (err) {
            throw err;
        }
    }
}

Main.run();
