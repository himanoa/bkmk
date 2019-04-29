import { injectable, inject } from "inversify";
import * as firebase from "firebase/app";
import "firebase/auth";

import { AuthCommand } from "@bkmk/core";

import { symbols } from "../Firebase/index";

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

  constructor(
    @inject(symbols.firebaseAuthProvider)
    firebaseProvider: firebase.auth.AuthProvider,
    @inject(symbols.firebaseAuth) auth: firebase.auth.Auth
  ) {
    super();
    this.firebaseProvider = firebaseProvider;
    this.auth = auth;
  }

  async login() {
    this.auth.signInWithRedirect(this.firebaseProvider);
  }

  async logout() {
    this.auth.signOut();
  }
}