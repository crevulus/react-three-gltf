import { useGLTF } from "@react-three/drei";
import React from "react";

export default function Model() {
  const gltf = useGLTF("/armchairYellow.gltf", true);
  return <primitive object={gltf.scene} dispose={null} />;
}
