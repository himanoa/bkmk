import { Container } from "inversify";
import { StateTracker } from "react-injection";
import { createContext } from "react";

import { config } from "./container.config";

import { createAuthContainer, createFirebaseContainer } from "@bkmk/browser";
import firebaseConfig from "../config/firebase.config";

const container = new Container(config);
container.load(createAuthContainer(), createFirebaseContainer(firebaseConfig));

StateTracker.bindToContainer(container);
const context = createContext(container);

export default context;
