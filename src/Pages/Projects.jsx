import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import Pledges from "../Components/Pledges/Pledges";

function Projects() {
  const [projectData, setProjectData] = useState({ pledges: [] });
  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
  }, []);

  return (
    <div>
      <h2>{projectData.title}</h2>
      {console.log("hi", projectData)}
      <h3>
        Created at:
        <Moment format="DD/MM/YYYY">{projectData.date_created}</Moment>
      </h3>
      <h3>{`Status: ${projectData.is_open ? "Open" : "Closed"}`}</h3>
      <h3>Pledges:</h3>
      <ul>
        {projectData.pledges &&
          projectData.pledges.map((pledgeData, key) => {
            return (
              <li>
                {pledgeData.amount} from {pledgeData.supporter_id}
              </li>
            );
          })}
      </ul>
      <Pledges />
    </div>
  );
}

export default Projects;
