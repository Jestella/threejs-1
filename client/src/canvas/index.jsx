import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Shirt from "./Shirt";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 0], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
      className="canvas"
    >
      <ambientLight intensity={0.5} />

      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
