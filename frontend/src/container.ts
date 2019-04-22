import { Container } from "inversify";
import auth from "./infra/Auth/container";
import firebase from "./infra/Firebase/container";
import { InjectableProps, StateTracker } from "react-injection";
import { createContext, useContext } from "react";

const container = new Container();
container.load(auth, firebase);

StateTracker.bindToContainer(container);
const context = createContext(container);

export default context;
