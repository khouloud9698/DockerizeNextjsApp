import Skills from "./Skills";
import PastExperience from "./PastExperience";
import Projects from "./Projects";
import Education from "./Education";
import Introduction from "./Introduction";

export default props => {
  return (
    <div className="right">
      <div className="right-inner"> 
        <Skills skills={props.skills} />
        <PastExperience experiences={props.experiences} />
        <Projects projects={props.projects} />
        <a className="resume" href={props.resumeURL} target="_blank">
          <div className="resume-link">Grab a PDF of my full resume</div>
        </a>
      </div>
    </div>
  );
};
