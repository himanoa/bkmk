import {
  assertFails,
  assertSucceeds
} from "@firebase/testing"

import bookmarkFixture from "../utils/bookmark"
import { authorizedStore, nonAuthorizedStore } from "../utils/store"

describe("bookmarks", () => {
  it("should be create bookmark", async () => {
    await assertSucceeds(
      authorizedStore.collection("bookmarks").add(bookmarkFixture())
    )
  })
})
