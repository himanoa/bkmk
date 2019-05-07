import { Page } from "./Page";

export abstract class PageQuery {
  abstract get(url: string): Promise<Page>;
}
