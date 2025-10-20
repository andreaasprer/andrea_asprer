"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Mail } from "lucide-react";
import { Typist } from "./typist";
import { Stage } from "@react-three/drei";
import { Avatar } from "@/components/avatar";

export const Hero = () => {
  return (
    <div className="relative min-h-screen text-white flex items-center">
      {/* 3D Canvas - positioned fixed to cover entire viewport */}
      <div className="hidden lg:flex absolute inset-0 z-0 pointer-events-none">
        <Canvas
          camera={{
            fov: 50,
          }}
          shadows
        >
          <Suspense fallback={null}>
            <Stage
              adjustCamera={false}
              intensity={1}
              center={{ disable: true }}
              shadows={false}
            >
              <Avatar
                position={[2, -0.6, 0]}
                rotation={[0, -Math.PI / 16, 0]}
                scale={1.2}
              />
            </Stage>
          </Suspense>
        </Canvas>
      </div>

      {/* Content layer - positioned above canvas with pointer events enabled */}
      <div className="relative z-10 mx-13 my-5 px-6 py-2 md:mx-30 lg:mx-30 w-full pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* left column */}
          <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left">
            <Typist />
            <h2 className="text-lg font-medium leading-none tracking-normal mb-2 text-white md:text-lg lg:text-xl">
              I build things sometimes
            </h2>
            <p className="text-sm font-light leading-5 tracking-wide mb-3 text-white md:text-2sm lg:text-base">
              I'm an aspiring software engineer from Los Angeles, California. I
              am currently a student at UCLA, studying Computer Science. I have
              a passion for all things technology from fullstack development to
              AI.
            </p>
            <div className="pointer-events-auto">
              <a
                href="mailto:asprer.andreaa@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="inline-flex items-center justify-center px-2 py-4 w-40 bg-background border-2 ease-in-out delay-75 hover:bg-orange-700 hover:text-white hover:border-orange-700
                                text-orange-500 text-sm font-bold tracking-wide rounded-md hover:-translate-y-1 hover:scale-105 active:scale-95
                                transition-all duration-200"
                >
                  <Mail className="mr-3" size={23} />
                  Get in Touch
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
