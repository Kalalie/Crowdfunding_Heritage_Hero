import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
  //variables
  const { projectData } = props;

  // template
  return (
    <div className="project-card">
      <Link to={`/project/${projectData.id}`}>
        <img src={projectData.image} />
        <h3 className="card-title">{projectData.title}</h3>
        <div className="card-details">
          <p>Username {projectData.owner}</p>
          <p>Goal ${projectData.goal}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
