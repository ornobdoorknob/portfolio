import React from 'react';

const ProjectCard = ({ image, title, description, techStack, githubLink, buttonText }) => {
    return (
        <div className="border-green-400 border-2 my-5 text-white bg-black mx-5 flex flex-col h-full">
            <div className="p-5 flex flex-col flex-1">
                <div className="border-2 overflow-hidden h-48">
                    <img src={image} className="w-full h-full object-contain" alt={title} />
                </div>
                <div className="font-oswald text-lg mt-4">{title}</div>
                <div className="my-2">
                    {techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="border-2 border-green-400 text-white text-xs mr-2 px-2.5 py-0.5 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="font-poppins text-xs text-zinc-300 my-1 flex-1">{description}</div>
                {githubLink && (
                    <a
                        target="_blank"
                        href={githubLink}
                        className="transition-all duration-300 text-center py-2 border-2 bg-primary hover:bg-white hover:text-black"
                    >
                        {buttonText}
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
