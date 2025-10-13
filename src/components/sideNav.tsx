"use client";
import React from "react";
import { useState, useEffect } from "react";

export const SideNav = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hidden lg:block fixed mx-12 px-6 h-screen z-40">
      <div className="flex flex-col justify-between h-full">
        {/* scroll down vertical text w/ animation*/}
        <div className="relative">
          <div className="absolute bottom-0 left-0">
            <p
              className={`text-xs font-semibold tracking-[.4em] transition-all duration-500 ease-in-out ${
                isScrolling
                  ? "translate-y-[180%] opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              SCROLLDOWN
            </p>

            {/* vertical line w/ animation */}
            <div className="flex-1 flex justify-center mt-2">
              <span
                className={`h-12 w-px bg-white transition-all duration-500 ease-in-out ${
                  isScrolling
                    ? "translate-y-[180%] opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
