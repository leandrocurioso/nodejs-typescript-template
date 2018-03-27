import { Container, interfaces } from "inversify";
import Types from "./inversify-types";
import { IRestify } from "./src/interface/i-restify";
import * as Restify from "restify";
import * as Restify from "./src/";

const container = new Container();

container.bind<IRestify>(Types.IRestify).to(Restify).inTransientScope();
container.bind<IRestify>(Types.IRestify).to(Restify).inTransientScope();

export default container;
