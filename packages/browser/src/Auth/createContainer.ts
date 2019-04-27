import { ContainerModule } from "inversify";
import { AuthCommand } from "@bkmk/core";
import { FirebaseAuthCommand } from "./FirebaseAuthCommand";

export function createAuthContainer() {
  return new ContainerModule(bind => {
    bind<AuthCommand>(AuthCommand).to(FirebaseAuthCommand);
  });
}
