import React from "react";
import "./App.scss";
//Components
import Header from "./components/header";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="title">
          <h1>Starter Branch</h1>
        </div>
      </div>
    </>
  );
}
