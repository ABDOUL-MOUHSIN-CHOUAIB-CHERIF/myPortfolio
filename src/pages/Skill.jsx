import html from "../assets/icons/skill-icons--html.png";
import css from "../assets/icons/skill-icons--css.png";
import javascript from "../assets/icons/skill-icons--javascript.png";
import react from "../assets/icons/skill-icons--react-dark.png";
import tailwind from "../assets/icons/skill-icons--tailwindcss-dark.png";
import git from "../assets/icons/skill-icons--git.png";
import github from "../assets/icons/skill-icons--github-dark.png";
import figma from "../assets/icons/skill-icons--figma-dark.png";
import mongo from "../assets/icons/skill-icons--mongodb.svg";
import java from "../assets/icons/devicon--java-wordmark.svg";
import express from "../assets/icons/skill-icons--expressjs-dark.svg";
import postman from "../assets/icons/devicon--postman.svg";
import node from "../assets/icons/skill-icons--nodejs-dark.svg";

import SkillCard from "../components/SkillCard";

export default function Skill() {
  // 1. We put your data in one place so the code is cleaner
  const techStack = [
    { name: "HTML5", icon: html },
    { name: "CSS3", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "React Js", icon: react },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Java", icon: java }, 
    { name: "MongoDB", icon: mongo }, 
    { name: "Express JS", icon: express } 
  ];

  const tools = [
    { name: "Git", icon: git },
    { name: "GitHub", icon: github },
    { name: "Figma", icon: figma },
    { name: "Postman", icon: postman },
    { name: "Node JS", icon: node }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- TECH STACK SECTION --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            My Tech Stack
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-24">
          {techStack.map((skill, index) => (
            <SkillCard key={index} name={skill.name} icon={skill.icon} />
          ))}
        </div>

        {/* --- TOOLS SECTION --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Design & Dev Tools
          </h2>
          <div className="h-1.5 w-20 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <SkillCard key={index} name={tool.name} icon={tool.icon} />
          ))}
        </div>

      </div>
    </section>
  );
}