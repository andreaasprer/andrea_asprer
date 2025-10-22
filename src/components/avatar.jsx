import React, { useEffect, useRef } from "react";
import { useGraph, useFrame } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";

export const Avatar = (props) => {
  const group = React.useRef()
  const { scene } = useGLTF('models/andrea_chibi.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)

  const { animations: standingAnimation } = useFBX("animations/idle.fbx");
  const { animations: helloAnimation } = useFBX("animations/hello.fbx");

  standingAnimation[0].name = "Standing";
  helloAnimation[0].name = "Hello";

  const { actions } = useAnimations(
    [standingAnimation[0], helloAnimation[0]],
    group
  );

  // follow the cursor
  useFrame((state) => {
    const target = new THREE.Vector3(
      state.pointer.x * 3,
      state.pointer.y,
      1
    );
    group.current.getObjectByName("Neck").lookAt(target);
  });

  useEffect(() => {
    if (!actions || !actions["Hello"] || !actions["Standing"]) {
      return;
    }

    const helloAction = actions["Hello"];
    const idleAction = actions["Standing"];

    // hello animation twice
    helloAction.reset().setLoop(THREE.LoopRepeat, 2).play();
    helloAction.clampWhenFinished = true; // hold on last frame

    const mixer = helloAction.getMixer();

    const onFinished = (e) => {
      if (e.action === helloAction) {
        // transition to idle animation with crossfade
        idleAction.reset().play();
        helloAction.crossFadeTo(idleAction, 1, false);
      }
    };

    mixer.addEventListener("finished", onFinished);

    return () => {
      mixer.removeEventListener("finished", onFinished);
    };
  }, [actions]); // Added actions to dependency array
  
  return (
    <group {...props} ref={group} dispose={null}>
      <group>
        <primitive object={nodes.Hips} />
        <skinnedMesh geometry={nodes.body.geometry} material={materials.base_material_primary} skeleton={nodes.body.skeleton} />
        <skinnedMesh geometry={nodes.hair_07.geometry} material={materials.base_material_primary} skeleton={nodes.hair_07.skeleton} />
        <skinnedMesh geometry={nodes.pants_01.geometry} material={materials.base_material_primary} skeleton={nodes.pants_01.skeleton} />
        <skinnedMesh geometry={nodes.shirt_05.geometry} material={materials.base_material_primary} skeleton={nodes.shirt_05.skeleton} />
        <skinnedMesh geometry={nodes.eyes_01_1.geometry} material={materials.base_material_primary} skeleton={nodes.eyes_01_1.skeleton} />
        <skinnedMesh geometry={nodes.eyes_01_2.geometry} material={materials.base_material_secondary} skeleton={nodes.eyes_01_2.skeleton} />
        <skinnedMesh geometry={nodes.shoes_02_1.geometry} material={materials.base_material_primary} skeleton={nodes.shoes_02_1.skeleton} />
        <skinnedMesh geometry={nodes.shoes_02_2.geometry} material={materials.base_material_secondary} skeleton={nodes.shoes_02_2.skeleton} />
        <skinnedMesh geometry={nodes.shoes_02_3.geometry} material={materials.base_material_tertiary} skeleton={nodes.shoes_02_3.skeleton} />
        <skinnedMesh geometry={nodes.socks_02_1.geometry} material={materials.base_material_primary} skeleton={nodes.socks_02_1.skeleton} />
        <skinnedMesh geometry={nodes.socks_02_2.geometry} material={materials.base_material_secondary} skeleton={nodes.socks_02_2.skeleton} />
        <skinnedMesh geometry={nodes.watch_02_1.geometry} material={materials.base_material_primary} skeleton={nodes.watch_02_1.skeleton} />
        <skinnedMesh geometry={nodes.watch_02_2.geometry} material={materials.base_material_secondary} skeleton={nodes.watch_02_2.skeleton} />
        <skinnedMesh geometry={nodes.watch_02_3.geometry} material={materials.base_material_tertiary} skeleton={nodes.watch_02_3.skeleton} />
      </group>
    </group>
  )
}