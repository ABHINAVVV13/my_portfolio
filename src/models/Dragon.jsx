import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import DragonScene from "../assets/3d/dragon.glb";



export function Dragon() {
  const DragonRef = useRef();
  

  
  const { scene, animations } = useGLTF(DragonScene);

  
  const { actions } = useAnimations(animations, DragonRef);

  
  useEffect(() => {
    actions["ZhanLi"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    
    DragonRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

   
    if (DragonRef.current.position.x > camera.position.x + 3.5) {
      
      DragonRef.current.rotation.y = 0;
    } else if (DragonRef.current.position.x < camera.position.x - 3.5) {
      
      DragonRef.current.rotation.y = 160;
    }

    
    if (DragonRef.current.rotation.y === 160) {
      
      DragonRef.current.position.x += 0.01;
      DragonRef.current.position.z -= 0.01;
    } else {
      
      DragonRef.current.position.x -= 0.01;
      DragonRef.current.position.z += 0.01;
    }
  });


  return (
    
    <mesh ref={DragonRef} position={[-5,2,1]} scale={[50,50,50]} >
     
      <primitive object={scene} />
    </mesh>

  );
}