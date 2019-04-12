import { parse } from "./bookmark"

describe("parse", () => {
  it("should be valid", () => {
    const target = {
      id: "valid",
      url: "https://example.com",
      bodyHtml: "<html></html>",
      comment: "hello"
    }
    const actual = parse(target)
    expect(actual).toBe(target)
  })
  it("should not be valid when invalid url", () => {
    const target = {
      id: "valid",
      url: "example",
      bodyHtml: "<html></html>",
      comment: "hello"
    }
    expect(() => parse(target)).toThrowErrorMatchingSnapshot()
  })
})

