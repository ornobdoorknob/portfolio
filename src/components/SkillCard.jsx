import React from 'react';

const SkillCard = ({ title, skills }) => {
  return (
    <div className="my-5 rounded-xl text-white mx-5">
      <div className="p-5 flex flex-col">
        <div className="text-green-400 font-oswald text-lg">{title}</div>
        <ul className="text-sm list-disc list-inside text-zinc-300">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
