import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignupForm.css";

function SignupForm() {
  // variables
  const [credentials, setCredentials] = useState({
    full_name: "",
    username: "",
    password: "",
    email: "",
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
    const response = await fetch(`${process.env.REACT_APP_API_URL}users/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData()
        .then((response) => {
          window.localStorage.setItem("token", response.token);
          history.push("/");
        })
        .catch((error) => {
          alert("Username is taken");
        });
    }
  };

  //template
  return (
    <form>
      <div id="SignupForm">
        <div>
          <label htmlFor="full_name"> Full Name:</label>
          <input
            type="text"
            id="full_name"
            placeholder="Enter Full Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="username"> Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password"> Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email"> Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <button id="ButtonSignup" type="submit" onClick={handleSubmit}>
          Sign up
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
