import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProfilePage.css";

function ProfilePage() {
  const [userDetails, setUserDetails] = useState({ userprofile: {} });
  const { id } = useParams();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const response = fetch(`${process.env.REACT_APP_API_URL}users/me/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setUserDetails(data);
      });
  }, []);

  return (
    <div className="ProfilePage">
      <h2>Full Name: {userDetails.full_name}</h2>
      <h2>Username: {userDetails.username}</h2>
      <h2>Email: {userDetails.email}</h2>
    </div>
  );
}

export default ProfilePage;
