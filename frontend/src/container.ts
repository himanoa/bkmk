import { Container } from "inversify";
import { InjectableProps, StateTracker } from "react-injection";
import { createContext, useContext } from "react";

import { config } from "./container.config";

import auth from "./infra/Auth/container";
import firebase from "./infra/Firebase/container";

const container = new Container(config);
container.load(auth, firebase);

StateTracker.bindToContainer(container);
const context = createContext(container);

export default context;
