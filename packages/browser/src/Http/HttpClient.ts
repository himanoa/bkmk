export abstract class HttpClient {
  abstract get(url: string, options?: {}): Promise<Response>;
  abstract post(url: string, options?: {}): Promise<Response>;
  abstract put(url: string, options?: {}): Promise<Response>;
  abstract delete(url: string, options?: {}): Promise<Response>;
  abstract option(url: string, options?: {}): Promise<Response>;
}
