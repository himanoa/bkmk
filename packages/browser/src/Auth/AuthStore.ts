import { AuthUser } from "@bkmk/core";
import { injectable } from "inversify";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Store, Selector, Updater } from "../utils/Store";

export type AuthState = {
  currentUser: AuthUser | null;
};

export const initialState = (): AuthState => {
  return {
    currentUser: null
  };
};

export abstract class AuthStore extends Store<AuthState> {}

@injectable()
export class RxAuthStore implements AuthStore {
  protected state = new BehaviorSubject(initialState());

  public select<T>(selector: Selector<AuthState, T>): Observable<T> {
    return this.state.pipe(map(selector));
  }

  public update(updater: Updater<AuthState>) {
    const current = this.state.value;
    this.state.next(updater(current));
  }
}
