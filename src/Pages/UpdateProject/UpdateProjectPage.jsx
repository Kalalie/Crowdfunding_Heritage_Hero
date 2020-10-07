import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateProjectForm from "../../Components/UpdateProjectForm/UpdateProjectForm";

function UpdateProject() {
  const [projectDetails, setprojectDetails] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setprojectDetails(data);
        setIsSuccess(true);
      });
  }, [id]);

  return isSuccess && <UpdateProjectForm initProjectDetails={projectDetails} />;
}

export default UpdateProject;
