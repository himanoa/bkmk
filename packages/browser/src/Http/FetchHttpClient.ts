import { HttpClient } from "./HttpClient";

export class FetchHttpClient implements HttpClient {
  constructor(public fetcher: typeof fetch) {
    this.fetcher = fetcher;
  }

  async get(url: string, options?: {}) {
    return this.fetcher(url, {
      ...options,
      method: "GET"
    });
  }

  async post(url: string, options?: {}) {
    return this.fetcher(url, {
      ...options,
      method: "POST"
    });
  }

  async put(url: string, options?: {}) {
    return this.fetcher(url, {
      ...options,
      method: "PUT"
    });
  }

  async delete(url: string, options?: {}) {
    return this.fetcher(url, {
      ...options,
      method: "DELETE"
    });
  }

  async option(url: string, options?: {}) {
    return this.fetcher(url, {
      ...options,
      method: "OPTION"
    });
  }
}
