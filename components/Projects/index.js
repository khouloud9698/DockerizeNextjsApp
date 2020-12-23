import ProjectItem from "./ProjectItem";

export default ({ projects }) => (
  <>
    {projects && Array.isArray(projects) && projects.length > 0 ? (
    <div className="projects">
      <h4>Recent Projects</h4>
      <div className="content">
        {projects.map(project => (
          <ProjectItem {...project} />
        ))}
      </div>
    </div>
  ) : null}
  </>
)