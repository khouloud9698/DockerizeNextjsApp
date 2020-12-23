export default (props) => (
  <div>
    <div className="project-item">
      <a className="project-title" href={props.url} target="_blank">{props.title}</a>
      <p className="project-desc">{props.desc}</p>
    </div>
  </div>
)