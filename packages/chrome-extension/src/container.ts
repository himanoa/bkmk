import { Container } from "inversify";
import { StateTracker } from "react-injection";
import { createContext } from "react";

import { config } from "./container.config";

import {
  createAuthContainer,
  createFirebaseContainer,
  createBookmarkContainer
} from "@bkmk/browser";
import firebaseConfig from "../config/firebase.config";

export const container = new Container(config);
container.load(
  createAuthContainer(),
  createFirebaseContainer(firebaseConfig),
  createBookmarkContainer()
);

StateTracker.bindToContainer(container);
const context = createContext(container);

export default context;
