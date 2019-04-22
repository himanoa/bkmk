import * as React from "react";
import * as ReactDOM from "react-dom";
import "reflect-metadata";
import { useInjection, InjectableProps } from "react-injection";

import containerContext from "./container";
import { AuthService } from "./domain/Auth/AuthService";

const deps: InjectableProps<{ authService: AuthService }> = {
  authService: AuthService
};
function App() {
  const { authService } = useInjection(containerContext, deps);
}
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");
  if (root) {
    ReactDOM.render(<h1>HelloWorld</h1>, root);
  }
});
