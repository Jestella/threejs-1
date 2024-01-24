import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import Shirt from "./Shirt";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    <Canvas camera={{ position: [0, 0, 0], fov: 30 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Environment preset="city" />
      <CameraRig>
        <Shirt />
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
