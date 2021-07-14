import React, { Suspense } from "react";

import Header from "./components/Header";
import HtmlContent from "./components/HtmlContent";
import Lights from "./components/Lights";

import { Canvas } from "@react-three/fiber";

import "./App.scss";

export default function App() {
  return (
    <>
      <Header />
      <Canvas colorManagement camera={{ postion: [0, 0, 120], fov: 70 }}>
        <Lights />
        <Suspense fallback={null}>
          <HtmlContent />
        </Suspense>
      </Canvas>
    </>
  );
}
