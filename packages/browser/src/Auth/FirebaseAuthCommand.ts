import { injectable, inject } from "inversify";
import * as firebase from "firebase/app";
import "firebase/auth";

import { AuthCommand } from "@bkmk/core";

import { symbols } from "../Firebase/index";
import { AuthStore } from "./AuthStore";

export class NotLoggedInError extends Error {
  constructor() {
    super();
    this.message = "Not logged in";
  }
}

@injectable()
export class FirebaseAuthCommand extends AuthCommand {
  public firebaseProvider: firebase.auth.AuthProvider;
  public auth: firebase.auth.Auth;
  public store: AuthStore;

  constructor(
    @inject(symbols.firebaseAuthProvider)
    firebaseProvider: firebase.auth.AuthProvider,
    @inject(symbols.firebaseAuth) auth: firebase.auth.Auth,
    store: AuthStore
  ) {
    super();
    this.firebaseProvider = firebaseProvider;
    this.auth = auth;
    this.store = store;
    this.auth.onAuthStateChanged(user => {
      if (user) {
        const { uid } = user;
        this.store.update(s => ({
          ...s,
          ...{ currentUser: { uid } }
        }));
      } else {
        this.store.update(s => ({
          ...s,
          ...{ currentUser: null }
        }));
      }
    });
  }

  async login() {
    this.auth.signInWithRedirect(this.firebaseProvider);
  }

  async logout() {
    this.auth.signOut();
  }
}
