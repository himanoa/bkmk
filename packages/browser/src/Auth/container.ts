import { ContainerModule } from "inversify";
import { AuthCommand } from "@bkmk/core";
import { FirebaseAuthCommand } from "./FirebaseAuthCommand";

export const container = new ContainerModule(bind => {
  bind<AuthCommand>(AuthCommand).to(FirebaseAuthCommand);
});
