import { ContainerModule } from "inversify";
import { config } from "../../container.config";
import { AuthService } from "../../domain/Auth/AuthService";
import { FirebaseAuthService } from "./FirebaseAuthService";

export default new ContainerModule(bind => {
  bind<AuthService>(AuthService).to(FirebaseAuthService);
});
