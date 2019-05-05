import { ContainerModule } from "inversify";
import { BookmarkCommand, BookmarkQuery } from "@bkmk/core";
import { FirebaseBookmarkCommand } from "./FirebaseBookmarkCommand";
import { FirebaseBookmarkQuery } from "./FirebaseBookmarkQuery";

export function createBookmarkContainer() {
  return new ContainerModule(bind => {
    bind(BookmarkQuery).to(FirebaseBookmarkQuery);
    bind(BookmarkCommand).to(FirebaseBookmarkCommand);
  });
}
