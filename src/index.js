import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, useLocation} from "react-router";
import {PageTransitions} from '@14islands/react-page-transitions'

import "./css/transitions"

import App from "./pages/App";
import Four0Four from "./pages/404";
import AnimationLayout from "./animationLayout"
import RouteRegestry from "./componenets/RouteRegestry";

const root = document.getElementById("root");

function Main() {
  const location = useLocation()
  return (
    <PageTransitions pageName={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<App />} />
        {RouteRegestry()}
        <Route path="*" element={<Four0Four />} /> {/* points to 404 page, always at the bottom */}
      </Routes>
    </PageTransitions>
  )
}

function Main() {
  const location = useLocation()
  return (
    <PageTransitions pageName={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<App />} />
        {RouteRegestry()}
        <Route path="*" element={<Four0Four />} /> {/* points to 404 page, always at the bottom */}
      </Routes>
    </PageTransitions>
  )
}

ReactDOM.createRoot(root).render(
  <HashRouter>
    <Main></Main>
  </HashRouter>
);