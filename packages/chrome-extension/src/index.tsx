import * as React from "react";
import * as ReactDOM from "react-dom";
import "reflect-metadata";
import { useInjection, InjectableProps } from "react-injection";
import { useObservable } from "react-use";

import containerContext from "./container";
import { AuthCommand, AuthQuery, AuthUser } from "@bkmk/core";

const deps: InjectableProps<{
  authCommand: AuthCommand;
  authQuery: AuthQuery;
}> = {
  authCommand: AuthCommand,
  authQuery: AuthQuery
};

function App() {
  const { authCommand, authQuery } = useInjection(containerContext, deps);
  const value = useObservable<AuthUser>(authQuery.authUser());
  return (
    <div>
      <h1>Hello</h1>
      <p>{value ? value.uid : "NotLoggedin"}</p>
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
