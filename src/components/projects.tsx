import { ProjectCard } from "@/components/projectCard";

const projectsData = [
  {
    id: 0,
    title: "StoryWorld",
    description: 
      "StoryWorld turns a child's imagination into a personalized illustrated storybook in seconds. Powered by AI, the app generates custom narratives and matching artwork from a simple text prompt. I led backend development, designing the API architecture and building the image generation pipeline end-to-end. StoryWorld was built at a hackathon in 6 hours with an passionate team of 3.",
    image: "/images/storyworld.png",
    github: "https://github.com/SohailGidwani/storyteller",
    demo: "https://devpost.com/software/storyworld",
    tags: ["Next.js", "TypeScript", "Claude API", "Nanobanana API", "Supabase"]
  },
  {
    id: 1,
    title: "Freshly",
    description:
      "A web app that helps households reduce food waste by turning grocery receipt photos into a tracked inventory, automatically parsing items, estimating expiration dates, and alerting users before food goes bad. Built with 4 other incredible teammates.",
    image: "/images/freshly.png",
    github: "https://github.com/tanisha-ag/Freshly",
    demo: "https://freshly-nine.vercel.app/",
    tags: ["React", "TypeScript", "Supabase"],
  },
  {
    id: 2,
    title: "SpeechLab",
    description:
      "A full-stack web application to help users with public speaking through real-time AI powered feedback",
    image: "/images/speechlab.png",
    github: "https://github.com/andreaasprer/speechlab",
    demo: "https://speech-lab.vercel.app",
    tags: ["React", "PyTorch", "FastAPI", "Speechmatics API"],
  },
  {
    id: 3,
    title: "Byte-to-Bite",
    description:
      "A full-stack web application to provide users a list of yummy recipes given what ingredients they have in their pantry. Built with a group of 5 talented teammates.",
    image: "/images/b2b.png",
    github: "https://github.com/andreaasprer/Byte-to-Bite",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 4,
    title: "Squirrel Surfers",
    description:
      "A UCLA-theme runner game built with Three.js featuring a squirrel navigating through Bruinwalk. Developed with an awesome team of 3 students.",
    image: "/images/squirrelsurfers.png",
    github: "https://github.com/andreaasprer/SquirrelSurfers",
    tags: ["HTML", "CSS", "JavaScript", "Three.js"],
  },
];

export const Projects = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-13 my-5 px-6 py-2 md:mx-30 lg:mx-30">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-2xl font-semibold leading-none tracking-normal md:text-3xl lg:text-4xl whitespace-nowrap">
            / projects
          </h1>
          <div className="flex-1 h-px bg-orange-500"></div>
        </div>

        {/* scrollable container */}
        <div className="relative">
          {/* mobile container : stack projects vertically */}
          <div className="flex flex-col items-center gap-6 md:hidden">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* medium and large viewports */}
          <div className="hidden md:block overflow-x-auto overflow-y-hidden pb-3 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-neutral-800">
            <div className="flex gap-8 px-1">
              {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
