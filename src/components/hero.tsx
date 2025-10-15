import { Mail } from "lucide-react";
import { Typist } from "./typist";

export const Hero = () => {
  return (
    <div className="min-h-screen text-white flex items-center">
      <div className="mx-13 my-5 px-6 py-2 md:mx-30 lg:mx-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* left column */}
          <div className="flex flex-col justify-center">
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
            <div>
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

          <div className="bg-background">
            {/* right column */}
            <h1>placeholder</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
