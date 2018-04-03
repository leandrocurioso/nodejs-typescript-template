import { IRestneerMiddleware, IRestneerMiddlewareError } from "./i-restneer-server";
import { IRestifyRequest, IRestifyResponse, IRestifyNext, IRestifyError } from "../restify/i-restify";
import RestfiyXRequestId from "restify-x-request-id";
import { Http } from "restneer-util";

export class RestneerMiddlewareNotFound implements IRestneerMiddleware {
    function(req: IRestifyRequest, res: IRestifyResponse, next: IRestifyNext): void {
        return Http.respond(res, {
            code: Http.code.NOT_FOUND,
            errors: [new Error("Not Found")]
          });
    }
}

export class RestneerMiddlewareInternalServerError implements IRestneerMiddlewareError {
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
