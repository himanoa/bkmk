import { injectable, inject } from "inversify";
import * as firebase from "firebase";

import { AuthService } from "../../domain/Auth/AuthService";
import { AuthUser } from "../../domain/Auth/AuthUser";

import { symbols } from "../Firebase/container";

export class NotLoggedInError extends Error {
  constructor() {
    super();
    this.message = "Not logged in";
  }
}

@injectable()
export class FirebaseAuthService extends AuthService {
  public firebaseProvider: firebase.auth.AuthProvider;
  public auth: firebase.auth.Auth;

  private author: AuthUser | null = null;
  constructor(
    @inject(symbols.firebaseAuthProvider)
    firebaseProvider: firebase.auth.AuthProvider,
    @inject(symbols.firebaseAuth) auth: firebase.auth.Auth
  ) {
    super();
    this.firebaseProvider = firebaseProvider;
    this.auth = auth;

    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.author = { uid: user.uid };
      }
    });
  }

  async login() {
    this.auth.signInWithRedirect(this.firebaseProvider);
  }

  async logout() {
    this.auth.signOut();
  }

  async currentLoggedInUser() {
    if (this.author) {
      return this.author;
    } else {
      throw NotLoggedInError;
    }
  }
}
