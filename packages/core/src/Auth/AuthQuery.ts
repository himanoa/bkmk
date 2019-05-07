import { Observable } from "rxjs";
import { AuthUser } from "./AuthUser";

export abstract class AuthQuery {
  public abstract authUser(): Observable<AuthUser | null>;
}

export default AuthQuery;
