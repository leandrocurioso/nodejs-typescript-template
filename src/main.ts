import RestneerServer from "./module/restneer/restneer.server";
import RestneerServerFactory from "./module/restneer/restneer.server.factory";

class Main {

    public static run(
        restneerServer: RestneerServer = new RestneerServerFactory().getInstance()
    ): void {
        restneerServer.loadUse();
        restneerServer.loadPre();
        restneerServer.loadOn();
        restneerServer.listen();
    }
}

try {
    Main.run();
} catch (err) {
    throw err;
}
