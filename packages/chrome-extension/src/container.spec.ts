import "reflect-metadata";
import { container } from "./container";

describe("container", () => {
  test("snapshot", () => {
    expect(container.snapshot()).toMatchInlineSnapshot(`undefined`);
  });
});
