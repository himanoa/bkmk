import { ContainerModule } from "inversify";
import { HttpClient } from "./HttpClient";
import { FetchHttpClient } from "./FetchHttpClient";

export function createHttpContainer() {
  return new ContainerModule(bind => {
    bind<HttpClient>(HttpClient).toConstantValue(new FetchHttpClient(fetch));
  });
}
