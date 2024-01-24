import React from "react";
import { Canvas } from "@react-three/fiber";

import Shirt from "./Shirt";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    <Canvas camera={{ position: [0, 0, 0], fov: 30 }}>
      <pointLight position={[10, 10, 10]} />
      <CameraRig>
        <Shirt />
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
