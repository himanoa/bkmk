import {
  assertFails,
  assertSucceeds
} from "@firebase/testing"

import bookmarkFixture from "../utils/bookmark"
import { authorizedStore, nonAuthorizedStore, uid } from "../utils/store"

describe("bookmarks", () => {
  describe("authorized", () => {
    describe("when authorId is equal to auth.uid", () => {
      it("should be create", async () => {
        await assertSucceeds(
          authorizedStore.collection("bookmarks").add({
            ...bookmarkFixture(uid)
          })
        )
      })
    })
    describe("when authorId is not equal to auth.uid", () => {
      it("should not be create", async () => {
        await assertFails(
          authorizedStore.collection("bookmarks").add(bookmarkFixture("invalid"))
        )
      })
      it("should not be read", async () => {
          authorizedStore.collection("bookmarks").doc("example").set({
            ...bookmarkFixture(uid)
          })
        await assertFails(
          nonAuthorizedStore.collection("bookmarks").doc("example").get()
        )
      })
    })
  })

  describe("unauthorized", () => {
    it("should not be create", async () => {
      await assertFails(
        nonAuthorizedStore.collection("bookmarks").add(bookmarkFixture(uid))
      )
    })
  })
})
