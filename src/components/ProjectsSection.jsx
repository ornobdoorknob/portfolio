import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      image: 'breakdown.gif',
      title: 'Break Down',
      description: 'A Battleship clone made using the MVC software design pattern. Components made using the Swing library.',
      techStack: ['Java'],
      githubLink: 'https://github.com/ornobdoorknob/breakdown',
      buttonText: 'View GitHub',
    },
    {
      image: 'compiler.gif',
      title: 'Custom Compiler',
      description: 'A Reader, Parser, and Scanner of a custom programming language called Corrosion (inspired by Rust).',
      techStack: ['C'],
      githubLink: 'https://github.com/ornobdoorknob/corrosion-compiler',
      buttonText: 'View GitHub',
    },
    {
      image: 'website.png',
      title: 'Portfolio Website',
      description: 'Responsive website built using a mobile-first approach utilizing TailwindCSS, ReactJS, and ViteJS.',
      techStack: ['ReactJS', 'TailwindCSS', 'ViteJS'],
      githubLink: 'https://github.com/ornobdoorknob/portfolio',
      buttonText: 'View GitHub',
    },
    {
      image: 'ecosafe.png',
      title: 'EcoSafeSense',
      description: 'The EcoSafeSense App, built with Flutter and Dart, integrates with air quality sensors using Firebase.',
      techStack: ['Dart', 'Flutter', 'Firebase'],
      githubLink: 'https://github.com/ornobdoorknob/',
      buttonText: 'Coming Soon',
    },
  ];

  return (
    <div class="align-center hero bg-fixed bg-center">
      <a name="portfolio"></a>
      <div class="pt-10 font-oswald text-4xl text-green-400 font-extrabold text-center">Projects Portfolio</div>
      <div className="py-10 flex items-center justify-center container mx-auto w-full text-center p-5 mt-5">
        <div className="font-poppins grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;