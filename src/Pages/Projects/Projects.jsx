import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";
import Pledges from "../../Components/Pledges/Pledges";
import "./Projects.css";

function Projects() {
  const [projectData, setProjectData] = useState({ pledges: [] });
  const { id } = useParams();
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    token != null ? setLoggedIn(true) : setLoggedIn(false);
  }, []);

  const deleteProject = async () => {
    const token = window.localStorage.getItem("token");
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}projects/${id}`,
      {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );
    return response.json();
  };

  const onDeleteClick = () => {
    const shouldDelete = window.confirm(
      "Are you sure you would like to delete this project?"
    );
    if (!shouldDelete) return;
    deleteProject().then((response) => {
      history.push("/");
    });
  };

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
    <div id="ProjectPage">
      <h2>{projectData.title}</h2>
      <h3>
        Created at:
        <Moment format="DD/MM/YYYY">{projectData.date_created}</Moment>
      </h3>
      <img src={projectData.image} />
      <h3>{`Status: ${projectData.is_open ? "Open" : "Closed"}`}</h3>
      <h3>Goal</h3>
      {projectData.goal}
      <h3>Pledges:</h3>
      <ul>
        {projectData.pledges &&
          projectData.pledges.map((pledgeData, key) => {
            return (
              <li key={key}>
                {pledgeData.amount} from {""}
                {pledgeData.anonymous ? "anonymous" : pledgeData.supporter}
              </li>
            );
          })}
      </ul>
      <h3>Comments:</h3>
      <ul>
        {projectData.pledges &&
          projectData.pledges.map((pledgeData, key) => {
            return <li key={key}>{pledgeData.comment}</li>;
          })}
        <h3>Pledge on this project </h3>
        <Pledges projectData={projectData} />
      </ul>
      {!loggedIn ? (
        ""
      ) : (
        <>
          <Link to={`/project/edit/${id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={onDeleteClick}>Delete</button>
        </>
      )}
    </div>
  );
}

export default Projects;
