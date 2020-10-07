import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function UpdateProjectForm({ initProjectDetails }) {
  // variables
  // console.log(initProjectDetails);
  const [projectDetails, setprojectDetails] = useState(initProjectDetails);

  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setprojectDetails((newprojectDetails) => ({
      ...newprojectDetails,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (true) {
      postData()
        .then((response) => {
          history.push(`/project/${projectDetails.id}`);
        })
        .catch((error) => console.log(error));
    }
  };
  const postData = async () => {
    const token = window.localStorage.getItem("token");
    console.log(projectDetails);
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}projects/${projectDetails.id}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          title: projectDetails.title,
          description: projectDetails.description,
          goal: projectDetails.goal,
          image: projectDetails.image,
          date_created: projectDetails.date_created,
          is_open: projectDetails.is_open,
        }),
      }
    );
    return response.json();
  };

  //template
  return (
    <form className="ProjectForm">
      <div>
        <label htmlFor="title"> Title:</label>
        <input
          type="text"
          id="title"
          value={projectDetails.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description"> Description:</label>
        <input
          type="text"
          id="description"
          value={projectDetails.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="is_open"> Project Open:</label>
        <input
          type="boolean"
          id="is_open"
          value={projectDetails.is_open}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="date"> Date:</label>
        <input
          type="date"
          id="date_created"
          value={projectDetails.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="goal"> Goal:</label>
        <input
          type="Number"
          id="goal"
          value={projectDetails.goal}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="image"> Image:</label>
        <input
          type="url"
          id="image"
          value={projectDetails.image}
          onChange={handleChange}
        />
      </div>
      <button
        className="ButtonCreateProject"
        type="submit"
        onClick={handleSubmit}
      >
        Update Project
      </button>
    </form>
  );
}

export default UpdateProjectForm;
