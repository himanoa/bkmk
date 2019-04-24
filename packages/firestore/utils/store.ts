import * as fs from "fs";
import * as path from "path";
import {
  initializeTestApp,
  loadFirestoreRules,
  clearFirestoreData
} from "@firebase/testing";

export const projectId = "firestore-emulator-example-" + Date.now();
export const uid = "alice";
export const email = "alice";

const authorized = initializeTestApp({
  projectId,
  auth: { uid: "alice", email: "example@example.com" }
});

const nonAuthorized = initializeTestApp({
  projectId
});

beforeAll(async done => {
  await loadFirestoreRules({
    projectId,
    rules: fs.readFileSync(
      path.resolve(__dirname, "..", "firestore.rules"),
      "utf-8"
    )
  });
  done();
});

afterAll(async () => {
  return Promise.all([authorized.delete(), nonAuthorized.delete()]);
});

beforeEach(done => {
  clearFirestoreData({
    projectId
  });
  done();
});

export const authorizedStore = authorized.firestore();
export const nonAuthorizedStore = nonAuthorized.firestore();
