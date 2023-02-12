import React from "react";
import { Col, Row } from "react-bootstrap";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/rocks_ground_01_4k.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.sphere_gltf.geometry}
        material={materials.rocks_ground_01}
      />
    </group>
  );
}

useGLTF.preload("/rocks_ground_01_4k.gltf");

const Thirdmodel = () => {
  return (
    <>
      <div className="model_container">
        <Row>
          <Col>
            <Canvas style={{ height: "800px" }}>
              <Suspense fallback={null}>
                <ambientLight />
                <spotLight
                  intensity={0.9}
                  angle={0.1}
                  penumbra={1}
                  position={[10, 15, 10]}
                  castShadow
                />
                <Model />
                <OrbitControls
                  enablePan={true}
                  enableZoom={true}
                  enableRotate={true}
                />
              </Suspense>
            </Canvas>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Thirdmodel;
