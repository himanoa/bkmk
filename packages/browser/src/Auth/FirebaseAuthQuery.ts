import { injectable } from "inversify";
import { Observable } from "rxjs";
import { AuthQuery, AuthUser } from "@bkmk/core";
import { AuthStore } from "./AuthStore";

@injectable()
export class FirebaseAuthQuery extends AuthQuery {
  public store: AuthStore;
  constructor(store: AuthStore) {
    super();
    this.store = store;
  }

  authUser(): Observable<AuthUser | null> {
    return this.store.select(state => {
      return state.currentUser;
    });
  }
}
