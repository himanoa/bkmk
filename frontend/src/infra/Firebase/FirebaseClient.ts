import { injectable } from "inversify";
import * as firebase from "firebase";

@injectable()
export class FirebaseClient implements firebase.app.App {
  public name: string;
  public options: {};
  private app: firebase.app.App;
  constructor(app: firebase.app.App) {
    this.app = app;
    this.name = app.name;
    this.options = app.options;
  }
  auth(): firebase.auth.Auth {
    return this.app.auth();
  }
  database(url?: string): firebase.database.Database {
    return this.app.database(url);
  }
  delete(): Promise<any> {
    return this.app.delete();
  }
  messaging(): firebase.messaging.Messaging {
    return this.app.messaging();
  }
  storage(url?: string): firebase.storage.Storage {
    return this.app.storage(url);
  }
  firestore(): firebase.firestore.Firestore {
    return this.app.firestore();
  }
  functions(region?: string): firebase.functions.Functions {
    return this.app.functions(region);
  }
}
