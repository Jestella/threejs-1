import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

import { Decal, useGLTF, useTexture } from "@react-three/drei";

const Shirt = () => {
  const { nodes, materials } = useGLTF("/shirt_baked.glb");
  const snap = useRef({
    color: [1, 1, 1], // Adjust with your initial color
  });

  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
  );

  return (
    <group scale={[5, 5, 5]}>
      <mesh
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      >
        <Decal
          debug // Makes "bounding box" of the decal visible
          position={[0, 0.04, 0.2]} // Position of the decal
          rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={0.15} // Scale of the decal
          depthTest={false}
          depthWrite={true}
        />
      </mesh>
    </group>
  );
};

export default Shirt;
