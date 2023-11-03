// Local Files
import { useFetchProjects } from '../fetchProjects';

export default function Projects() {
  const { isLoading, projects } = useFetchProjects();

  if (isLoading) return <div className="loading"></div>;

  const projectsList = projects.map((project) => {
    const { id, imageUrl, title, url } = project;
    return (
      <a
        className="project"
        key={id}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="img" src={imageUrl} alt={title} />
        <h5>{title}</h5>
      </a>
    );
  });

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline" />
      </div>
      <ul className="projects-center">{projectsList}</ul>
    </section>
  );
}
