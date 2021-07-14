import React, { Suspense } from "react";

import Header from "./components/Header";

import "./App.scss";
import { Canvas } from "@react-three/fiber";
import HtmlContent from "./components/HtmlContent";

export default function App() {
  return (
    <>
      <Header />
      <Canvas colorManagement camera={{ postion: [0, 0, 120], fov: 150 }}>
        <Suspense fallback={null}>
          <HtmlContent />
        </Suspense>
      </Canvas>
    </>
  );
}
