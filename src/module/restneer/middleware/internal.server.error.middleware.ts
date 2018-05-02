import {  IRestneerMiddlewareError } from "../restneer.server.interface";
import { IRestifyRequest, IRestifyResponse, IRestifyError } from "../../restify/restify.interface";
import { Http } from "restneer-util";

class RestneerMiddlewareInternalServerError implements IRestneerMiddlewareError {
    function(req: IRestifyRequest, res: IRestifyResponse, err: IRestifyError): void {
        return Http.respond(res, {
            code: Http.code.INTERNAL_SERVER_ERROR,
            errors: [
                new Error("Internal Server Error"),
                err
            ]
          });
    }
}

export default RestneerMiddlewareInternalServerError;
