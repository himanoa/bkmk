export abstract class AuthCommand {
  public abstract login(): Promise<void>;
  public abstract logout(): Promise<void>;
}

export default AuthCommand;
