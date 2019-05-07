import "reflect-metadata";
import { FirebaseAuthQuery } from "./FirebaseAuthQuery";
import { RxAuthStore } from "./AuthStore";

describe("FirebaseAuthQuery", () => {
  describe("isLogged", () => {
    describe("when logged in", () => {
      it("should be currentUser", () => {
        const store = new RxAuthStore();
        store.update(() => ({
          currentUser: { uid: "validUID" }
        }));
        const target = new FirebaseAuthQuery(store);
        target.authUser().subscribe(user => {
          if (user) expect(user.uid).toBe("validUID");
        });
      });
    });
    describe("when logged out", () => {
      it("should be null", () => {
        const target = new FirebaseAuthQuery(new RxAuthStore());
        target.authUser().subscribe(user => {
          expect(user).toBe(null);
        });
      });
    });
  });
});
