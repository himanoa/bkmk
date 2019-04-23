import { ContainerModule } from "inversify";
import { config } from "../../container.config";
import { AuthCommand } from "@bkmk/core";
import { FirebaseAuthCommand } from "./FirebaseAuthCommand";

export default new ContainerModule(bind => {
  bind<AuthCommand>(AuthCommand).to(FirebaseAuthCommand);
});
