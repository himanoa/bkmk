import { ContainerModule, decorate, injectable } from "inversify";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../../../config/firebase.config";

const app = firebase.initializeApp(firebaseConfig);
export const symbols = {
  firebaseApp: Symbol.for("firebaseApp"),
  firebaseAuthProvider: Symbol.for("firebaseAuthProvider"),
  firebaseAuth: Symbol.for("firebaseAuth"),
  firestore: Symbol.for("firestore")
};
export default new ContainerModule(bind => {
  bind<firebase.app.App>(symbols.firebaseApp).toConstantValue(app);
  bind<firebase.auth.Auth>(symbols.firebaseAuth).toConstantValue(app.auth());
  bind<firebase.auth.AuthProvider>(
    symbols.firebaseAuthProvider
  ).toConstantValue(new firebase.auth.GoogleAuthProvider());
  bind<firebase.firestore.Firestore>(symbols.firestore).toConstantValue(
    app.firestore()
  );
});
