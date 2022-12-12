import React from "react";
import ReactDOM from "react-dom/client";

// React Router DOM
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// CSS
import "./style/globals.css";
import "./style/theme.css";

// Components
import { Home, NoPage } from "./views";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
