import React from "react";
import ReactDOM from "react-dom";
import AppProviders from "providers/AppProviders";
import Root from "views/Root";
import "assets/styles/fonts.css";
import { worker } from "mocks/browser";

worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <Root />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById("root")
  );
});
