import "reflect-metadata";
import "whatwg-fetch";
import { DummyHttpClient } from "../Http/DummyHttpClient";
import { BkmkFunctionPageQuery } from "./BkmkFunctionPageQuery";
import { PageQuery } from "@bkmk/core";

describe("BkmkFunctionPageQuery", () => {
  describe("#get", () => {
    describe("when valid response", () => {
      it("should be return Page", () => {
        const target: PageQuery = new BkmkFunctionPageQuery(
          new DummyHttpClient(
            new Response(
              JSON.stringify({
                title: "example",
                body: "foobar",
                text: "foobar"
              })
            )
          )
        );
        target.get("https://example.com").then(result => {
          expect(result).toMatchInlineSnapshot(`
          Object {
            "body": "foobar",
            "text": "foobar",
            "title": "example",
          }
        `);
        });
      });
    });
  });
});
