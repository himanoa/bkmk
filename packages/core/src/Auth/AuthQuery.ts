import { Observable } from "rxjs";

export abstract class AuthQuery {
  public abstract isLogged(): Observable<boolean>;
}

export default AuthQuery;
