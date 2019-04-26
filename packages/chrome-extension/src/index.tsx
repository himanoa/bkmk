import * as React from "react";
import * as ReactDOM from "react-dom";
import "reflect-metadata";
import { useInjection, InjectableProps } from "react-injection";

import containerContext from "./container";
import { AuthCommand } from "@bkmk/core";

const deps: InjectableProps<{ authCommand: AuthCommand }> = {
  authCommand: AuthCommand
};
function App() {
  const { authCommand } = useInjection(containerContext, deps);
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={async () => await authCommand.login()}>login</button>
    </div>
  );
}
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");
  if (root) {
    ReactDOM.render(<App />, root);
  }
});
