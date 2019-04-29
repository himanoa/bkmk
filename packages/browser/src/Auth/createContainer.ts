import { ContainerModule } from "inversify";
import { AuthCommand } from "@bkmk/core";
import { FirebaseAuthCommand } from "./FirebaseAuthCommand";
import { AuthStore, RxAuthStore } from "./AuthStore"

export function createAuthContainer() {
  return new ContainerModule(bind => {
    bind<AuthCommand>(AuthCommand).to(FirebaseAuthCommand);
    bind<AuthStore>(AuthStore).to(RxAuthStore);
  });
}
