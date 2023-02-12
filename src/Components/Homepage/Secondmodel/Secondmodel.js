import React from "react";
import { Col, Row } from "react-bootstrap";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF("/rough_block_wall_4k.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.sphere_gltf.geometry}
        material={materials.rough_block_wall}
      />
    </group>
  );
}

useGLTF.preload("/rough_block_wall_4k.gltf");

const Secondmodel = () => {
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

export default Secondmodel;
