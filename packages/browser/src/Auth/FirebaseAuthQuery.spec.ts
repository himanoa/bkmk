import "reflect-metadata";
import { FirebaseAuthQuery } from "./FirebaseAuthQuery";
import { RxAuthStore } from "./AuthStore";

describe("FirebaseAuthQuery", () => {
  const target = new FirebaseAuthQuery(new RxAuthStore());
  describe("isLogged", () => {
    describe("when logged in", () => {
      it("should be true", () => {
        target.isLogged().subscribe(isLoggedIn => {
          expect(isLoggedIn).toBe(true);
        });
      });
    });
  });
});
