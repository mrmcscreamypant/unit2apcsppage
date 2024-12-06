import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./pages/App";
import Four0Four from "./pages/404";
import RouteRegestry from "./componenets/RouteRegestry";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {RouteRegestry()}
      <Route path="*" element={<Four0Four />} /> {/* points to 404 page, always at the bottom */}
    </Routes>
  </BrowserRouter>
);