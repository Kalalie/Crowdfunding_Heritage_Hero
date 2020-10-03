import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Pledges.css";

function Pledges({ projectData }) {
  // variables
  const [Pledge, setPledge] = useState({
    project_id: "",
    amount: "",
    comment: "",
    supporter_id: "",
    anonymous: "",
  });

  const history = useHistory();

  // methods
  const handleChange = (e) => {
    const { id, value } = e.target;
    setPledge((newPledge) => ({
      ...newPledge,
      [id]: value,
    }));
  };

  const postData = async () => {
    const token = window.localStorage.getItem("token");
    console.log(Pledge, projectData);
    Pledge.project_id = projectData.id;
    const response = await fetch(`${process.env.REACT_APP_API_URL}pledges/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        ...Pledge,
      }),
    });
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (true) {
      postData()
        .then((response) => {
          history.push("/");
        })
        .catch((error) => console.log(error));
    }
  };

  //template
  return (
    <form className="PledgesForm">
      <div>
        <label htmlFor="amount"> Goal:</label>
        <input
          type="Number"
          id="amount"
          placeholder="Enter amount"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="comment"> Comment:</label>
        <input
          type="text"
          id="comment"
          placeholder="Enter comment"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="anonymous"> Anonymous</label>
        <input type="checkbox" id="anonymous" onChange={handleChange} />
      </div>
      <button className="PledgesButton" type="pledge" onClick={handleSubmit}>
        Pledge
      </button>
    </form>
  );
}

export default Pledges;
