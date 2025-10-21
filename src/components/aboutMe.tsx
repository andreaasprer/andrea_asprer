import { Skills } from "@/components/skills";

export const AboutMe = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="mx-13 my-5 px-6 py-2 md:mx-30 lg:mx-30">
        <div className="flex items-center gap-4 mb-5">
          <h1 className="text-2xl font-semibold leading-none tracking-normal md:text-3xl lg:text-4xl whitespace-nowrap">
            / about me
          </h1>
          <div className="flex-1 h-px bg-orange-500"></div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-40">
          <p>
            I am currently pursuing a{" "}
            <span className="font-bold">Bachelor of Science</span> in
            <span className="font-bold"> Computer Science</span> at{" "}
            <span className="font-bold text-orange-500">UCLA</span>. I enjoy
            developing my skills through personal projects and expanding my
            knowledge of software development. Outside the classroom, I compete
            in hackathons and enjoy teaching programming to others. In my free
            time, I play video games and play the bass and guitar.
          </p>
          <div className="flex justify-center">
            <img
              className="h-auto max-w-40 rounded-lg lg:max-w-60"
              src="images/headshot.png"
              alt="photo of andrea asprer"
            />
          </div>
        </div>
        <Skills />
      </div>
    </div>
  );
};
