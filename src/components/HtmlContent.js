import React from "react";

import { Html } from "@react-three/drei";
import { Section } from "../hooks/useSection";
import Model from "./Model";

export default function HtmlContent() {
  return (
    <Section factor={1.5} offset={0}>
      <group position={[0, 0, 0]}>
        <mesh position={[0, 0, 0]}>
          <Model />
        </mesh>
        <Html fullscreen>
          <div className="container">
            <h1 className="title">Hello</h1>
          </div>
        </Html>
      </group>
    </Section>
  );
}
