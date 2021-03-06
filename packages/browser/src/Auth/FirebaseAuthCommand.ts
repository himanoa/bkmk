import { injectable, inject } from "inversify";
import * as firebase from "firebase/app";
import "firebase/auth";

import { AuthCommand, AuthUser } from "@bkmk/core";

import { symbols } from "../Firebase/index";
import { AuthStore, AuthState } from "./AuthStore";

export class NotLoggedInError extends Error {
  constructor() {
    super();
    this.message = "Not logged in";
  }
}

const updater = (currentUser: AuthUser | null) => {
  return (state: AuthState) => ({
    ...state,
    currentUser: currentUser
  });
};

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

    this.auth.onAuthStateChanged((user: { uid: string } | null) => {
      if (user) {
        const { uid } = user;
        this.store.update(updater({ uid }));
      } else {
        this.store.update(updater(null));
      }
    });
  }

  async login() {
    this.auth.signInWithPopup(this.firebaseProvider);
  }

  async logout() {
    this.auth.signOut();
  }
}
