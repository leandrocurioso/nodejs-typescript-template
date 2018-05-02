import { IRestneerMiddleware } from "../restneer.server.interface";
import { IRestifyRequest, IRestifyResponse, IRestifyNext } from "../../restify/restify.interface";
import { Http } from "restneer-util";

class RestneerMiddlewareNotFound implements IRestneerMiddleware {
    function(req: IRestifyRequest, res: IRestifyResponse, next: IRestifyNext): void {
        return Http.respond(res, {
            code: Http.code.NOT_FOUND,
            errors: [new Error("Not Found")]
          });
    }
}

export default RestneerMiddlewareNotFound;
