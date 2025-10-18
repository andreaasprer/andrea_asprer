"use client";
import React from "react";
import { useState, useEffect } from "react";

const navItems = [
  { id: "about", name: "About Me" },
  { id: "projects", name: "Projects" },
];

export const SideNav = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hidden lg:block fixed mx-12 px-6 h-screen z-40 pointer-events-none">
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

        {/* navigation links on right side */}
        <div className="hidden lg:block fixed right-0 top-0 h-screen z-40 pointer-events-none">
          <div className="flex items-end justify-end h-full pb-16 pr-36">
            <nav className="pointer-events-auto">
              <ul className="flex flex-col items-end gap-6">
                <li key="home">
                  <button
                    onClick={() => scrollToSection("home")}
                    className={`group flex items-center justify-end gap-4 text-white transition-all duration-200 ease-out ${
                      isScrolling ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <span className="text-sm font-medium tracking-wide">
                      Home
                    </span>
                    <span className="h-[1.5px] w-20 bg-white"></span>
                  </button>
                </li>
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`group flex items-center justify-end gap-4 text-neutral-300 hover:text-white transition-all duration-200 ease-out ${
                        isScrolling ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      <span className="text-sm font-medium tracking-wide">
                        {item.name}
                      </span>
                      <span className="h-[1.5px] w-12 bg-neutral-300 group-hover:bg-white group-hover:w-20  transition-all duration-500 ease-in-out"></span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
