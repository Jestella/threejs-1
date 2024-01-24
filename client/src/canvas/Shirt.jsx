import React from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

const Shirt = () => {
  const { nodes, materials } = useGLTF("/shirt_baked.glb");
  return (
    <group>
      <mesh
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      >
        <Decal
          debug // Makes "bounding box" of the decal visible
          position={[0, 0.04, 0.2]} // Position of the decal
          rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={0.15} // Scale of the decal
        />
      </mesh>
    </group>
  );
};

export default Shirt;
