import { ContainerModule } from "inversify";
import { PageQuery } from "@bkmk/core";
import { BkmkFunctionPageQuery } from "./BkmkFunctionPageQuery";

export function createPageContainer() {
  return new ContainerModule(bind => {
    bind(PageQuery).to(BkmkFunctionPageQuery);
  });
}
