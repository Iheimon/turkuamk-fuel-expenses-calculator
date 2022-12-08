import React from "react";
import ReactDOM from "react-dom/client";

// Components
import Example from "./components/Example";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Example text='this is an example' />
  </React.StrictMode>
);
