import { HttpClient } from "./HttpClient";

export class DummyHttpClient implements HttpClient {
  public dummyRes: Response;
  constructor(dummyRes?: Response) {
    this.dummyRes = dummyRes || new Response();
  }

  async get() {
    return this.dummyRes;
  }

  async post() {
    return this.dummyRes;
  }
  async delete() {
    return this.dummyRes;
  }
  async put() {
    return this.dummyRes;
  }
  async option() {
    return this.dummyRes;
  }
}
