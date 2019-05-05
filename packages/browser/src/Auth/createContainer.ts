import { ContainerModule } from "inversify";
import { AuthCommand, AuthQuery } from "@bkmk/core";
import { FirebaseAuthCommand } from "./FirebaseAuthCommand";
import { FirebaseAuthQuery } from "./FirebaseAuthQuery";
import { AuthStore, RxAuthStore } from "./AuthStore";

export function createAuthContainer() {
  return new ContainerModule(bind => {
    bind(AuthQuery).to(FirebaseAuthQuery);
    bind(AuthCommand).to(FirebaseAuthCommand);
    bind(AuthStore).to(RxAuthStore);
  });
}
