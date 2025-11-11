import React, { useEffect, useState } from 'react';
import './Projects.css';
import { getProjects } from '../queries/getProjects';
import { Project } from '../types';
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaJenkins,
  FaPython,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import {
  SiPostgresql,
  SiMongodb,
  SiMaterialdesign,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiTerraform,
} from 'react-icons/si';
import { GrKubernetes } from 'react-icons/gr';

const techIcons: { [key: string]: JSX.Element } = {
  ReactJS: <FaReact />,
  NodeJS: <FaNodeJs />,
  AWS: <FaAws />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  'Material UI': <SiMaterialdesign />,
  HTML5: <SiHtml5 />,
  CSS3: <SiCss3 />,
  JQuery: <SiJquery />,
  Docker: <FaDocker />,
  Jenkins: <FaJenkins />,
  Terraform: <SiTerraform />,
  Kubernetes: <GrKubernetes />,
  Python: <FaPython />,
};

const fallbackImage =
  'https://via.placeholder.com/800x450/1e1e1e/cccccc?text=Project+Preview';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndexes, setActiveIndexes] = useState<{ [key: number]: number }>(
    {}
  );

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await getProjects();
        const items = (res as any)?.allProjects ?? [];
        setProjects(items);
        const init: { [key: number]: number } = {};
        items.forEach((_: any, i: number) => (init[i] = 0));
        setActiveIndexes(init);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const handlePrev = (index: number, galleryLength: number) => {
    setActiveIndexes((prev) => ({
      ...prev,
      [index]: prev[index] === 0 ? galleryLength - 1 : prev[index] - 1,
    }));
  };

  const handleNext = (index: number, galleryLength: number) => {
    setActiveIndexes((prev) => ({
      ...prev,
      [index]: (prev[index] + 1) % galleryLength,
    }));
  };

  if (loading) return <div className="projects-loading">Loading projects...</div>;
  if (projects.length === 0) return <div className="projects-empty">No projects found.</div>;

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Projects</h1>
        <p>Showcasing selected work built with modern tools and real-world impact.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project: any, index: number) => {
          const gallery: any[] = project.projectGallery || [];
          const currentImage =
            (gallery[activeIndexes[index]]?.url as string) ||
            project.projectThumbnail?.url ||
            fallbackImage;

          return (
            <div
              key={index}
              className="project-card"
              style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className="project-image-wrapper">
                <img
                  src={currentImage}
                  alt={project.projectTitle}
                  className="project-image"
                  loading="lazy"
                />

                {gallery.length > 1 && (
                  <>
                    <button
                      className="nav-btn left"
                      onClick={() => handlePrev(index, gallery.length)}
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      className="nav-btn right"
                      onClick={() => handleNext(index, gallery.length)}
                    >
                      <FaChevronRight />
                    </button>
                  </>
                )}
              </div>

              <div className="project-details">
                <h3>{project.projectTitle}</h3>
                <div
                  className="project-description"
                  dangerouslySetInnerHTML={{
                    __html: project.projectDescription || '',
                  }}
                />
                <div className="tech-used">
                  {Array.isArray(project.projectTags)
                    ? project.projectTags.map((tech: string, i: number) => (
                        <span key={i} className="tech-badge">
                          {techIcons[tech] || '🔧'} {tech}
                        </span>
                      ))
                    : typeof project.projectTags === 'string'
                    ? project.projectTags
                        .split(',')
                        .map((tech: string, i: number) => (
                          <span key={i} className="tech-badge">
                            {techIcons[tech.trim()] || '🔧'} {tech.trim()}
                          </span>
                        ))
                    : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
