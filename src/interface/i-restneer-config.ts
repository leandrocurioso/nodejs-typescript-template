import * as Restify from "restify";
import { IRestifyServerOptions } from "./i-restify";

export interface IRestneerConfigGeneral {
    dirRoot: string,
    nodeEnv: string,
    port: number,
    acceptable: string[];
}

export interface IRestneerConfig {
    general: IRestneerConfigGeneral;
    server: IRestifyServerOptions;
}