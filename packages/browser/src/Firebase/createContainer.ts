import { ContainerModule } from "inversify";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { symbols } from "./symbols";

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
}

export function createFirebaseContainer(firebaseConfig: FirebaseConfig) {
  return new ContainerModule(bind => {
    const app = firebase.initializeApp(firebaseConfig);

    bind<firebase.app.App>(symbols.firebaseApp).toConstantValue(app);
    bind<firebase.auth.Auth>(symbols.firebaseAuth).toConstantValue(app.auth());
    bind<firebase.auth.AuthProvider>(
      symbols.firebaseAuthProvider
    ).toConstantValue(new firebase.auth.GoogleAuthProvider());
    bind<firebase.firestore.Firestore>(symbols.firestore).toConstantValue(
      app.firestore()
    );
  });
}
