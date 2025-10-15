export const Skills = () => {
    const skills = [
        {name:'C++' , icon:'/images/cpp.png' },
        {name:'Python' , icon:'/images/python.png' },
        {name:'JavaScript ES6+' , icon:'/images/js.png' },
        {name:'React' , icon:'/images/react.png' },
        {name:'Node.js' , icon:'/images/nodejs.png' },
        {name:'FastAPI' , icon:'/images/fastapi.png' },
        {name:'MongoDB' , icon:'/images/mongodb.png' },
        {name:'Docker' , icon:'/images/docker.png' },
        {name:'AWS' , icon:'/images/aws.png' },
        {name:'PyTorch' , icon:'/images/pytorch.png' },
        
    ]

    return (
        <div className="py-8">
            <h2 className="font-normal tracking-[3] mb-4 lg:text-xl">
                MY SKILLS
            </h2>
            <div className="bg-zinc-700 rounded-xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-6">
                    {skills.map((skill, index) => {
                        return (
                            <div key={index} className="flex flex-col items-center gap-4">
                                <div className="flex items-center justify-center">
                                    <img 
                                        src={skill.icon} 
                                        alt={skill.name}
                                        className="w-15 h-15 object-contain"
                                    />
                                </div>
                                <span className="text-xs font-medium text-center uppercase">{skill.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
    
}