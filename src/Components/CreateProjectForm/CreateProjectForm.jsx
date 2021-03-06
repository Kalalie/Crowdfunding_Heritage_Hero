import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CreateProjectForm.css";

function CreateProjectForm() {
  // variables
  const [credentials, setCredentials] = useState({
    title: "",
    description: "",
    goal: "",
    image: "",
    date_created: "",
    is_open: "",
  });

  const history = useHistory();

  // methods
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const token = window.localStorage.getItem("token");
    console.log(token);
    const response = await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        ...credentials,
        date_created: new Date(credentials.date_created).toISOString(),
      }),
    });
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (true) {
      postData()
        .then((response) => {
          // window.localStorage.setItem("token", response.token);
          history.push("/");
        })
        .catch((error) => console.log(error));
    }
  };

  //template
  return (
    <form className="ProjectForm">
      <div>
        <label htmlFor="title"> Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter title"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description"> Description:</label>
        <input
          type="text"
          id="description"
          placeholder="Enter descrption"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="is_open"> Project Open:</label>
        <input
          type="boolean"
          id="is_open"
          placeholder="Project is opened"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="date"> Date:</label>
        <input
          type="date"
          id="date_created"
          placeholder="date"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="goal"> Goal:</label>
        <input
          type="Number"
          id="goal"
          placeholder="Enter Goal"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="image"> Image:</label>
        <input type="url" id="image" onChange={handleChange} />
      </div>
      <button
        className="ButtonCreateProject"
        type="submit"
        onClick={handleSubmit}
      >
        Create Project
      </button>
    </form>
  );
}

export default CreateProjectForm;
