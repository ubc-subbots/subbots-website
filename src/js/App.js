import React from "react";
import { HashRouter } from "react-router-dom";
import { Header, Footer } from "../components";
import Router from "./Router";
import "../styles/app.scss";

export default function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Header />
        <Router />
        <Footer />
      </HashRouter>
    </div>
  );
}
