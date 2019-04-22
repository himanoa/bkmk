import { ContainerModule, decorate, injectable } from "inversify";
import * as firebase from "firebase";

const app = firebase.initializeApp({});
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