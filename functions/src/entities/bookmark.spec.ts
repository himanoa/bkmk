import { parse } from "./bookmark"

describe("parse", () => {
  it("should be valid", async () => {
    const target = {
      id: "valid",
      url: "https://example.com",
      bodyHtml: "<html></html>",
      comment: "hello"
    }
    const actual = await parse(target)
    expect(actual).toBe(target)
  })
  it("should not be valid when invalid url", async () => {
    const target = {
      id: "valid",
      url: "example",
      bodyHtml: "<html></html>",
      comment: "hello"
    }
    await expect(parse(target)).rejects.toThrowErrorMatchingSnapshot()
  })
})

