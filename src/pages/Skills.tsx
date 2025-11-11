import React from "react";
import "./Skills.css";
import {
  FaPython,
  FaDatabase,
  FaReact,
  FaJsSquare,
  FaChartBar,
  FaCloud,
  FaProjectDiagram,
  FaCodeBranch,
  FaGitAlt,
} from "react-icons/fa";
import { SiTableau, SiMysql, SiJupyter, SiNumpy, SiPandas } from "react-icons/si";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      skills: [
        { name: "Python", icon: <FaPython className="skill-icon" /> },
        { name: "JavaScript", icon: <FaJsSquare className="skill-icon" /> },
        { name: "React.js", icon: <FaReact className="skill-icon" /> },
      ],
    },
    {
      title: "Data Analytics & BI",
      skills: [
        { name: "Power BI", icon: <FaChartBar className="skill-icon" /> },
        { name: "Tableau", icon: <SiTableau className="skill-icon" /> },
        { name: "SQL (MySQL)", icon: <SiMysql className="skill-icon" /> },
      ],
    },
    {
      title: "Data Science & ML Tools",
      skills: [
        { name: "NumPy", icon: <SiNumpy className="skill-icon" /> },
        { name: "Pandas", icon: <SiPandas className="skill-icon" /> },
        { name: "Jupyter Notebooks", icon: <SiJupyter className="skill-icon" /> },
      ],
    },
    {
      title: "Cloud, DevOps & Version Control",
      skills: [
        { name: "AWS", icon: <FaCloud className="skill-icon" /> },
        { name: "Git", icon: <FaGitAlt className="skill-icon" /> },
        { name: "CI/CD Pipelines", icon: <FaCodeBranch className="skill-icon" /> },
      ],
    },
    {
      title: "Project Management & Modeling",
      skills: [
        { name: "Process Mapping", icon: <FaProjectDiagram className="skill-icon" /> },
        { name: "Data Modeling", icon: <FaDatabase className="skill-icon" /> },
      ],
    },
  ];

  return (
    <div className="skills-wrapper">
      <div className="skills-container glass">
        <h1 className="skills-title">Technical Skills</h1>
        <p className="skills-subtitle">
          Core tools and technologies I use across analytics, BI, and full-stack data projects.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-category">
              <h2 className="category-title">{category.title}</h2>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
