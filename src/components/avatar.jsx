import React, { useEffect, useRef } from "react";
import { useGraph, useFrame } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";

export const Avatar = (props) => {
  const group = useRef();

  const { scene } = useGLTF("models/chibi.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

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
      state.pointer.y * 2,
      1
    );
    group.current.getObjectByName("Head").lookAt(target);
  });

  useEffect(() => {
    const helloAction = actions["Hello"];
    const idleAction = actions["Standing"];

    // hello animation once
    helloAction.reset().setLoop(THREE.LoopOnce, 1).play();
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
  }, [actions]);

  return (
    <group {...props} ref={group} dispose={null}>
      <group>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.body.geometry}
          material={materials.mini_material}
          skeleton={nodes.body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.head.geometry}
          material={materials.mini_material}
          skeleton={nodes.head.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cap_1.geometry}
          material={materials.mini_material}
          skeleton={nodes.cap_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cap_2.geometry}
          material={materials.mini_material_secondary}
          skeleton={nodes.cap_2.skeleton}
        />
        <skinnedMesh
          name="eyes_1"
          geometry={nodes.eyes_1.geometry}
          material={materials.mini_material}
          skeleton={nodes.eyes_1.skeleton}
          morphTargetDictionary={nodes.eyes_1.morphTargetDictionary}
          morphTargetInfluences={nodes.eyes_1.morphTargetInfluences}
        />
        <skinnedMesh
          name="eyes_2"
          geometry={nodes.eyes_2.geometry}
          material={materials.mini_material_secondary}
          skeleton={nodes.eyes_2.skeleton}
          morphTargetDictionary={nodes.eyes_2.morphTargetDictionary}
          morphTargetInfluences={nodes.eyes_2.morphTargetInfluences}
        />
      </group>
    </group>
  );
};

useGLTF.preload("models/chibi.glb");
