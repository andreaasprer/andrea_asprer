import { ProjectCard } from '@/components/projectCard'

const projectsData = [
    {
        id:1,
        title: "SpeechLab",
        description: "A full-stack web application to help users with public speaking through real-time AI powered feedback",
        image: "/images/fastapi.png",
        github: "https://github.com/andreaasprer/speechlab",
        demo: "https://speech-lab.vercel.app",
        tags: ["React", "PyTorch", "FastAPI", "Speechmatics API"],
    },
    {
        id:2,
        title: "Byte-to-Bite",
        description: "A full-stack web application to provide users a list of yummy recipes given what ingredients they have in their pantry. Built with a group of 5 talented teammates.",
        image: "/images/fastapi.png",
        github: "https://github.com/andreaasprer/Byte-to-Bite",
        tags: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
        id:3,
        title: "Squirrel Surfers",
        description: "A UCLA-theme runner game built with Three.js featuring a squirrel navigating through Bruinwalk. Developed with an awesome team of 3 students.",
        image: "/images/fastapi.png",
        github: "https://github.com/andreaasprer/SquirrelSurfers",
        tags: ["HTML", "CSS", "JavaScript", "Three.js"],
    },
]

export const Projects = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="mx-13 my-5 px-6 py-2 md:mx-30 lg:mx-30">
                <div className="flex items-center gap-4 mb-2">
                    <h1 className="text-2xl font-semibold leading-none tracking-normal md:text-3xl lg:text-4xl whitespace-nowrap">
                        / projects
                    </h1>
                    <div className="flex-1 h-px bg-orange-500"></div>
                </div>

                {/* scrollable container */}
                <div className="relative">
                    <div className="overflow-x-auto overflow-y-hidden pb-3 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-neutral-800">
                        <div className='flex gap-8 px-1'>
                            {projectsData.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}