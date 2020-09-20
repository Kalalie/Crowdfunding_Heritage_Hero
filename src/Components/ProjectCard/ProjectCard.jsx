import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
  //variables
  const { projectData } = props;

  // template
  return (
    <div className="project-card">
      <Link to="/projects">
        <img src={projectData.image} />
        <h3 className="card-title">{projectData.title}</h3>
        <div className="card-details">
          <p>Username</p>
          <p>Location</p>
          <p>$ Pledged</p>
          <p> J- X</p>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
