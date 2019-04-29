import "reflect-metadata";
import { container } from "./container";

describe("container", () => {
  test("passed", () => {
    expect(container).toBeDefined();
  });
});
