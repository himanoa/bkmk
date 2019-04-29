import { initialState, RxAuthStore } from "./AuthStore";

describe("RxAuthStore", () => {
  const target = new RxAuthStore();
  describe("#select", () => {
    it("should be equal initialState", () => {
      target.select(state => {
        expect(state).toMatchObject(initialState());
      });
    });
  });

  describe("#update", () => {
    it("should be changed", () => {
      const newState = { currentUser: { uid: "changedUID" } };

      target.update(() => {
        return newState;
      });
      target.select(state => {
        expect(state).toBe(newState);
      });
    });
  });
});
