import { injectable } from "inversify";
import { Observable } from "rxjs";
import { AuthQuery } from "@bkmk/core";
import { AuthStore } from "./AuthStore";

@injectable()
export class FirebaseAuthQuery extends AuthQuery {
  constructor(public store: AuthStore) {
    super();
  }

  isLogged(): Observable<boolean> {
    return this.store.select(state => {
      return state.currentUser ? true : false;
    });
  }
}
