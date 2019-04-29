import { Observable } from "rxjs"

export type Selector<S,T> = (state: S) => T
export type Updater<S> = (state: S) => S

export abstract class Store<S> {
  public abstract select<T>(selector: Selector<S,T>): Observable<T>
  public abstract update(updater: Updater<S>): void
}
