import React from "react";
import "./Firstmodel.css";
import { Col, Row } from "react-bootstrap";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESHdMESH_MESH0MESH5MESH_MES_silver_d_0
                  .geometry
              }
              material={materials.silver_d}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESHdMESH_MESH0MESH4MESH_MES_silver_d_0
                  .geometry
              }
              material={materials.silver_d}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH2MES_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH1MES_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH001_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH002_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESH0MESH5MESH_MESHbMESHlMESHaMES_black_0
                  .geometry
              }
              material={materials.black}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH2MESH5MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH2MESH4MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH003_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHrMESH_MESHgMESHlMESHaMESHsMESHsMESH_MESH0MESH2MESH_MESHrMES_r_glass_0
                  .geometry
              }
              material={materials.r_glass}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHgMESHlMESHaMESHsMESHsMESH_MESH0MESH4MESH_MESHgMESHlMESHaMES_glass_0
                  .geometry
              }
              material={materials.glass}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHrMESHeMESHdMESH_MESH0MESH2MESH_MESHrMESHeMESHdMESH_MESH0MES_red_0
                  .geometry
              }
              material={materials.material}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH2MESH3MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH2MESH2MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESH0MESH4MESH_MESHbMESHlMESHaMES_black_0
                  .geometry
              }
              material={materials.black}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH2MESH1MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH2MESH0MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESH1MESH3MESH_MESHsMESHiMES_silver_0
                  .geometry
              }
              material={materials.silver}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH1MESH9MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH004_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHdMESH_MESHgMESHlMESHaMESHsMESHsMESH_MESH0MESH2MESH_MESHdMES_d_glass_0
                  .geometry
              }
              material={materials.d_glass}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH1MESH7MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESHdMESH_MESH0MESH3MESH_MES_silver_d_0
                  .geometry
              }
              material={materials.silver_d}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESHdMESH_MESH0MESH2MESH_MES_silver_d_0
                  .geometry
              }
              material={materials.silver_d}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESHdMESH_MESH0MESH1MESH_MES_silver_d_0
                  .geometry
              }
              material={materials.silver_d}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESHdMESH_MESH0MESH8MESH_MES_silver_d_0
                  .geometry
              }
              material={materials.silver_d}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESH1MESH0MESH_MESHsMESHiMES_silver_0
                  .geometry
              }
              material={materials.silver}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH1MESH6MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH005_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH006_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHsMESHhMESHiMESHnMESHyMESH_MES_black_shiny_0
                  .geometry
              }
              material={materials.black_shiny}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHlMESHiMESHgMESHhMESHtMESHsMESH_MESH0MESH1MESH_MESHlMESHiMES_lights_0
                  .geometry
              }
              material={materials.lights}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHgMESHlMESHaMESHsMESHsMESH_MESH0MESH1MESH_MESHgMESHlMESHaMES_glass_0
                  .geometry
              }
              material={materials.glass}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH1MESH5MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHsMESHhMESHiMESHnMESHyMESH_black_shiny_0
                  .geometry
              }
              material={materials.black_shiny}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHsMESHhMESHiMESHnMESHyMESH001_black_shiny_0
                  .geometry
              }
              material={materials.black_shiny}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH1MESH4MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESH0MESH9MESH_MESHsMESHiMES_silver_0
                  .geometry
              }
              material={materials.silver}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESH0MESH8MESH_MESHsMESHiMES_silver_0
                  .geometry
              }
              material={materials.silver}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHtMESHiMESHrMESHeMESH_MESHmMESHaMESHtMESH5MESH_MESH0MESH4MES_tire_mat5_0
                  .geometry
              }
              material={materials.tire_mat5}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHsMESHhMESHiMESHnMESHyMESH002_black_shiny_0
                  .geometry
              }
              material={materials.black_shiny}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHsMESHhMESHiMESHnMESHyMESH003_black_shiny_0
                  .geometry
              }
              material={materials.black_shiny}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHtMESHiMESHrMESHeMESH_MESHmMESHaMESHtMESH5MESH_MESH0MESH3MES_tire_mat5_0
                  .geometry
              }
              material={materials.tire_mat5}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHrMESHaMESHkMESHeMESHsMESH2MESH_MESH0MESH4MESH_MESHbMES_brakes2_0
                  .geometry
              }
              material={materials.brakes2}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHrMESHaMESHkMESHeMESHsMESH2MESH_MESH0MESH3MESH_MESHbMES_brakes2_0
                  .geometry
              }
              material={materials.brakes2}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHrMESH_MESHgMESHlMESHaMESHsMESHsMESH_MESH0MESH1MESH_MESHrMES_r_glass_0
                  .geometry
              }
              material={materials.r_glass}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH007_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHoMESHdMESHyMESH_MESH0MESH3MESH_MESHbMESHoMESHdMESHyMES_body_0
                  .geometry
              }
              material={materials.body}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHoMESHdMESHyMESH_MESH0MESH7MESH_MESHbMESHoMESHdMESHyMES_body_0
                  .geometry
              }
              material={materials.body}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESHdMESH_MESH0MESH7MESH_MES_silver_d_0
                  .geometry
              }
              material={materials.silver_d}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESHdMESH_MESH0MESH6MESH_MES_silver_d_0
                  .geometry
              }
              material={materials.silver_d}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH0MES_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHsMESHhMESHiMESHnMESHyMESH004_black_shiny_0
                  .geometry
              }
              material={materials.black_shiny}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHrMESHaMESHkMESHeMESHsMESH2MESH_MESH0MESH2MESH_MESHbMES_brakes2_0
                  .geometry
              }
              material={materials.brakes2}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHrMESHaMESHkMESHeMESHsMESH2MESH_MESH0MESH1MESH_MESHbMES_brakes2_0
                  .geometry
              }
              material={materials.brakes2}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESH0MESH5MESH_MESHsMESHiMES_silver_0
                  .geometry
              }
              material={materials.silver}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH008_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHvMESHdMESH_MESHgMESHlMESHaMESHsMESHsMESH_MESH0MESH1MESH_MES_vd_glass_0
                  .geometry
              }
              material={materials.vd_glass}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHdMESH_MESHgMESHlMESHaMESHsMESHsMESH_MESH0MESH1MESH_MESHdMES_d_glass_0
                  .geometry
              }
              material={materials.d_glass}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH009_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHtMESHiMESHrMESHeMESH_MESHmMESHaMESHtMESH5MESH_MESH0MESH2MES_tire_mat5_0
                  .geometry
              }
              material={materials.tire_mat5}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHsMESHhMESHiMESHnMESHyMESH005_black_shiny_0
                  .geometry
              }
              material={materials.black_shiny}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHtMESHiMESHrMESHeMESH_MESHmMESHaMESHtMESH5MESH_MESH0MESH1MES_tire_mat5_0
                  .geometry
              }
              material={materials.tire_mat5}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHsMESHhMESHiMESHnMESHyMESH006_black_shiny_0
                  .geometry
              }
              material={materials.black_shiny}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESH0MESH4MESH_MESHsMESHiMES_silver_0
                  .geometry
              }
              material={materials.silver}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHrMESH_MESHlMESHiMESHgMESHhMESHtMESHsMESH_MESH0MESH1MESH_MES_r_lights_0
                  .geometry
              }
              material={materials.r_lights}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHoMESHdMESHyMESH_MESH0MESH1MESH_MESHbMESHoMESHdMESHyMES_body_0
                  .geometry
              }
              material={materials.body}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHsMESHhMESHiMESHnMESHyMESH007_black_shiny_0
                  .geometry
              }
              material={materials.black_shiny}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHpMESHlMESHaMESHtMESHeMESH_MESH0MESH1MESH_MESHpMESHlMESHaMES_plate_0
                  .geometry
              }
              material={materials.plate}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH0MESH4MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH0MESH3MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH0MESH2MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH0MESH1MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESH0MESH3MESH_MESHsMESHiMES_silver_0
                  .geometry
              }
              material={materials.silver}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESH0MESH2MESH_MESHsMESHiMES_silver_0
                  .geometry
              }
              material={materials.silver}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESH0MESH1MESH_MESHsMESHiMES_silver_0
                  .geometry
              }
              material={materials.silver}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHsMESHhMESHiMESHnMESHyMESH008_black_shiny_0
                  .geometry
              }
              material={materials.black_shiny}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH1MESH3MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH1MESH2MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESH0MESH7MESH_MESHsMESHiMES_silver_0
                  .geometry
              }
              material={materials.silver}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESH0MESH6MESH_MESHsMESHiMES_silver_0
                  .geometry
              }
              material={materials.silver}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHsMESHhMESHiMESHnMESHyMESH009_black_shiny_0
                  .geometry
              }
              material={materials.black_shiny}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH010_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH011_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHoMESHdMESHyMESH_MESH0MESH2MESH_MESHbMESHoMESHdMESHyMES_body_0
                  .geometry
              }
              material={materials.body}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH012_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH013_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH0MESH7MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESH1MESH6MESH_MESHsMESHiMES_silver_0
                  .geometry
              }
              material={materials.silver}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESH0MESH1MESH_MESHbMESHlMESHaMES_black_0
                  .geometry
              }
              material={materials.black}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHpMESHlMESHaMESHtMESHeMESH_MESH0MESH2MESH_MESHpMESHlMESHaMES_plate_0
                  .geometry
              }
              material={materials.plate}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHoMESHdMESHyMESH_MESH0MESH6MESH_MESHbMESHoMESHdMESHyMES_body_0
                  .geometry
              }
              material={materials.body}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHiMESHnMESHtMESHeMESHrMESHiMESHoMESHrMESH_MESH0MESH1MESH_MES_interior_0
                  .geometry
              }
              material={materials.interior}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHsMESHhMESHiMESHnMESHyMESH010_black_shiny_0
                  .geometry
              }
              material={materials.black_shiny}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESH1MESH5MESH_MESHsMESHiMES_silver_0
                  .geometry
              }
              material={materials.silver}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHrMESHeMESHdMESH_MESH0MESH1MESH_MESHrMESHeMESHdMESH_MESH_red_0
                  .geometry
              }
              material={materials.material}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHrMESHeMESHdMESH_MESH0MESH1MESH_MESHrMESHeMESHdMESH_MESH0MES_red_0
                  .geometry
              }
              material={materials.material}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH2MESH6MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHoMESHdMESHyMESH_MESH0MESH5MESH_MESHbMESHoMESHdMESHyMES_body_0
                  .geometry
              }
              material={materials.body}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESH1MESH4MESH_MESHsMESHiMES_silver_0
                  .geometry
              }
              material={materials.silver}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHoMESHdMESHyMESH_MESH0MESH4MESH_MESHbMESHoMESHdMESHyMES_body_0
                  .geometry
              }
              material={materials.body}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH0MESH6MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH0MESH5MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH014_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHsMESHhMESHiMESHnMESHyMESH011_black_shiny_0
                  .geometry
              }
              material={materials.black_shiny}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH015_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHsMESHhMESHiMESHnMESHyMESH012_black_shiny_0
                  .geometry
              }
              material={materials.black_shiny}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH1MESH1MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH1MESH0MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHsMESHhMESHiMESHnMESHyMESH013_black_shiny_0
                  .geometry
              }
              material={materials.black_shiny}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHsMESHhMESHiMESHnMESHyMESH014_black_shiny_0
                  .geometry
              }
              material={materials.black_shiny}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESH1MESH7MESH_MESHsMESHiMES_silver_0
                  .geometry
              }
              material={materials.silver}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH016_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH0MESH9MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESH0MESH3MESH_MESHbMESHlMESHaMES_black_0
                  .geometry
              }
              material={materials.black}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHgMESHlMESHaMESHsMESHsMESH_MESH0MESH2MESH_MESHgMESHlMESHaMES_glass_0
                  .geometry
              }
              material={materials.glass}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH0MESH8MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH017_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH018_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESH0MESH2MESH_MESHbMESHlMESHaMES_black_0
                  .geometry
              }
              material={materials.black}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHmMESHaMESHtMESHtMESH_MESH019_black_matt_0
                  .geometry
              }
              material={materials.black_matt}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESH1MESH2MESH_MESHsMESHiMES_silver_0
                  .geometry
              }
              material={materials.silver}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHsMESHiMESHlMESHvMESHeMESHrMESH_MESH1MESH1MESH_MESHsMESHiMES_silver_0
                  .geometry
              }
              material={materials.silver}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHbMESHlMESHaMESHcMESHkMESH_MESHsMESHhMESHiMESHnMESHyMESH015_black_shiny_0
                  .geometry
              }
              material={materials.black_shiny}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHcMESHhMESHrMESHoMESHmMESHeMESH_MESH1MESH8MESH_MESHcMESHhMES_chrome_0
                  .geometry
              }
              material={materials.chrome}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={
                nodes
                  .MESHgMESHlMESHaMESHsMESHsMESH_MESH0MESH3MESH_MESHgMESHlMESHaMES_glass_0
                  .geometry
              }
              material={materials.glass}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

const Firstmodel = () => {
  const [mesh, setMesh] = useState("#ffffff");
  const [stripes, setStripes] = useState("#ffffff");
  const [soul, setSoul] = useState("#ffffff");
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
                <Model
                  customColors={{ mesh: mesh, stripes: stripes, soul: soul }}
                />
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

export default Firstmodel;
