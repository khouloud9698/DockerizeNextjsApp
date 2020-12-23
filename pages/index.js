import React from "react";
import ReactGA from "react-ga";

import Styles from "./styles";
import Head from "./Head";
import Hero from "../components/Hero";
import Description from "../components/Description";
import DATA from '../static/data'

class Home extends React.Component {
  componentDidMount() {
    ReactGA.initialize("UA-139689679-2");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <>
        <Styles />
        <Head />
        <div className="app">
          <Hero
            name={DATA.name}
            subtext={DATA.subtext}
            jobStatus={DATA.jobStatus}
            instaURL={DATA.instaURL}
            githubURL={DATA.githubURL}
            linkedinURL={DATA.linkedinURL}
          />
          <Description
            skills={DATA.skills}
            resumeURL={DATA.resumeURL}
            experiences={DATA.experiences}
            projects={DATA.projects}
          />
        </div>
      </>
    );
  }
}

export default Home;
