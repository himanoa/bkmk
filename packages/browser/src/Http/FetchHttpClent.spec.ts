import { FetchHttpClient } from "./FetchHttpClient";
describe("FetchHttpClient", () => {
  describe("get", () => {
    test("method should be get", async () => {
      const dummyFn = jest.fn();
      const target = new FetchHttpClient(dummyFn);
      await target.get("https://example.com");
      expect(dummyFn.mock.calls).toMatchInlineSnapshot(`
                Array [
                  Array [
                    "https://example.com",
                    Object {
                      "method": "GET",
                    },
                  ],
                ]
            `);
    });
  });

  describe("post", () => {
    test("method should be get", async () => {
      const dummyFn = jest.fn();
      const target = new FetchHttpClient(dummyFn);
      await target.post("https://example.com");
      expect(dummyFn.mock.calls).toMatchInlineSnapshot(`
        Array [
          Array [
            "https://example.com",
            Object {
              "method": "POST",
            },
          ],
        ]
      `);
    });
  });

  describe("put", () => {
    test("method should be get", async () => {
      const dummyFn = jest.fn();
      const target = new FetchHttpClient(dummyFn);
      await target.put("https://example.com");
      expect(dummyFn.mock.calls).toMatchInlineSnapshot(`
        Array [
          Array [
            "https://example.com",
            Object {
              "method": "PUT",
            },
          ],
        ]
      `);
    });
  });

  describe("delete", () => {
    test("method should be get", async () => {
      const dummyFn = jest.fn();
      const target = new FetchHttpClient(dummyFn);
      await target.delete("https://example.com");
      expect(dummyFn.mock.calls).toMatchInlineSnapshot(`
        Array [
          Array [
            "https://example.com",
            Object {
              "method": "DELETE",
            },
          ],
        ]
      `);
    });
  });

  describe("option", () => {
    test("method should be get", async () => {
      const dummyFn = jest.fn();
      const target = new FetchHttpClient(dummyFn);
      await target.option("https://example.com");
      expect(dummyFn.mock.calls).toMatchInlineSnapshot(`
        Array [
          Array [
            "https://example.com",
            Object {
              "method": "OPTION",
            },
          ],
        ]
      `);
    });
  });
});
