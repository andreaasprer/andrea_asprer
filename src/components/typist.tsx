"use client";
import React from "react";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

export const Typist = () => {
  // create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["hi, <span class='text-orange-500'>andrea</span> here."],
      typeSpeed: 45,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: false,
    });

    return () => {
      // destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-3xl font-semibold leading-none tracking-normal mb-3 md:text-4xl lg:text-5xl">
      <span ref={el} />
    </div>
  );
};
