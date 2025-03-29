import React from 'react';
import SkillCard from './SkillCard';

const SkillsSection = () => {
  const skillsData = [
    {
      title: "Programming Languages",
      skills: ["Java", "C", "SQL", "Dart", "C++", "C#"]
    },
    {
      title: "Scripting Languages",
      skills: ["JavaScript", "Bash"]
    },
    {
      title: "Web Development",
      skills: [
        "HTML5", "CSS3; Bootstrap, Tailwind", "XML", 
        "JavaScript; AngularJS, ReactJS, ViteJS", 
        "Jakarta EE", "Microsoft Azure", "PHP"
      ]
    },
    {
      title: "Database Management Systems",
      skills: ["Firebase", "MySQL", "Microsoft Access"]
    },
    {
      title: "Software Development Tools",
      skills: ["Jira", "Git", "Figma", "Virtual Machines", "IntelliJ IDEA", "Unreal Engine"]
    }
  ];

  return (
    <div className="w-full">
      <a name="skills"></a>
      <div className="pt-10 font-oswald text-4xl text-green-400 font-extrabold text-center">
        Skills
      </div>
      <div className="bg-black py-10 flex items-center justify-center container mx-auto w-full">
        <div className="font-poppins grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {skillsData.map((skillGroup, index) => (
            <SkillCard key={index} title={skillGroup.title} skills={skillGroup.skills} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
