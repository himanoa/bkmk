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

const projectId = 'firestore-emulator-example-' + Date.now();

const authorized = initializeTestApp({
  projectId,
  auth: { uid: "alice", email: "example@example.com" }
})

const nonAuthorized = initializeTestApp({
  projectId
})

const authorizedStore = authorized.firestore()
const nonAuthorizedStore = nonAuthorized.firestore()

beforeAll(async(done) => {
  await loadFirestoreRules({
    projectId,
    rules: fs.readFileSync(path.resolve(__dirname, "..", "firestore.rules"), "utf-8")
  })
  done()
})

afterAll(async () => {
  return Promise.all([authorized.delete(), nonAuthorized.delete()])
})

beforeEach((done) => {
  clearFirestoreData({
    projectId
  })
  done()
})

describe("bookmarks", () => {
  it("should be create bookmark", async (done) => {
    await assertSucceeds(
      authorizedStore.collection("bookmarks").add(bookmarkFixture())
    )
    done()
  })
})
