import { injectable } from "inversify";
import { Page, PageQuery } from "@bkmk/core";
import { HttpClient, HttpError } from "../Http/HttpClient";

@injectable()
export class BkmkFunctionPageQuery implements PageQuery {
  constructor(public client: HttpClient) {}

  async get(url: string): Promise<Page> {
    return this.client
      .get(url)
      .then(response => {
        if (!response.ok) {
          throw new HttpError({
            status: response.status,
            statusText: response.statusText
          });
        }
        return response.json();
      })
      .then(json => {
        if (json["title"] && json["body"] && json["text"]) {
          return {
            title: json["title"],
            body: json["body"],
            text: json["text"]
          };
        }
        throw new Error("get-html API result is invalid payload");
      });
  }
}
