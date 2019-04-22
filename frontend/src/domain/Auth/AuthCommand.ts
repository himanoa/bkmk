import { AuthUser } from "./AuthUser";

export abstract class AuthCommand {
  public abstract login(): Promise<void>;
  public abstract logout(): Promise<void>;
  public abstract currentLoggedInUser(): Promise<AuthUser>;
}
