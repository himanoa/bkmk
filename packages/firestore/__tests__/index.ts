import * as fs from "fs"
import * as path from "path"
import {
  initializeTestApp,
  loadFirestoreRules,
  clearFirestoreData,
  assertFails,
  assertSucceeds
} from "@firebase/testing"

import bookmarkFixture from "../utils/bookmark"

const projectId= 'firestore-emulator-example-' + Date.now();

const authorized = initializeTestApp({
  projectId,
  auth: { uid: "alice", email: "example@example.com" }
}).firestore()

const nonAuthorized = initializeTestApp({
  projectId
}).firestore()

beforeAll(async() => {
  await loadFirestoreRules({
    projectId,
    rules: fs.readFileSync(path.resolve(__dirname, "..", "firestore.rules"), "utf-8")
  })
})

beforeEach(async () => {
  await clearFirestoreData({
    projectId
  })
})

describe("bookmarks", () => {
  it("should be create bookmark", async () => {
    await assertSucceeds(authorized.collection("bookmarks").add(bookmarkFixture))
  })
})

test("should be valid", () => {
  expect(1).toBe(2)
})
