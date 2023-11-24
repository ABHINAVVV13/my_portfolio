import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import { World } from '../models/world'
import {Sky} from '../models/Sky'
import { OrbitControls } from "@react-three/drei";
import { Dragon } from "../models/Dragon";
import HomeInfo from "../components/HomeInfo";


function Home() {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(true);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 0.025, 3.4];
    let rotation = [0.1,4.7,0]

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, 0.015, 3.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, 0, 3.6];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition , islandRotation] = adjustIslandForScreenSize();
  return (
    <section className='w-full h-screen relative'>
        <div className='absolute top-28 left-100 right-20 z-10 flex
        items-center justify-center'>
            {currentStage && <HomeInfo currentStage={currentStage}/>}
        </div>

        <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near:0.1, far: 1000 }}>

            <Suspense fallback={<Loader/> }>
                <directionalLight/>
                <ambientLight intensity={1}/>
                <pointLight/>
                <spotLight/>
                <hemisphereLight/>

                <Dragon />
                <Sky isRotating={isRotating}/>
                <World position = {islandPosition}
                       scale={islandScale}
                       rotation={islandRotation}
                       isRotating={isRotating}
                       setIsRotating={setIsRotating}
                       setCurrentStage={setCurrentStage}/>
                 <OrbitControls enableZoom enablePan enableRotate maxPolarAngle={Math.PI / 2} />

            </Suspense>

        </Canvas>

    </section>
  )
}

export default Home