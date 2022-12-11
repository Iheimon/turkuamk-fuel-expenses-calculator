import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./style/globals.css";
import "./style/theme.css";

// Components
import { Button, Header, Layout, Textbox } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout>
      <Header>Fuel Expenses Calculator</Header>
      <Textbox text='Kulut'></Textbox>
      <Button>Testi nappula</Button>
    </Layout>
  </React.StrictMode>
);
