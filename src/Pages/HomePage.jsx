import React, { useState, useEffect } from "react";
import ProjectCard from "../Components/ProjectCard/ProjectCard";
import { useLocation } from "react-router-dom";
import FeaturedImage from "../Components/FeaturedImage/FeaturedImage";
import Footer from "../Components/Footer/Footer";
import SearchBar from "../Components/SearchBar/SearchBar";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function HomePage() {
  //variables
  const [projectList, setProjectList] = useState([]);

  let query = useQuery();

  const q = query.get("q");
  // console.log({ q });

  //methods
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${q ? `?q=${q}` : ""}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
    // setProjectList(allProjects);
  }, [q]);

  //template
  return (
    <div>
      <h1> Projects </h1>
      <SearchBar />
      <div id="project-list">
        {projectList.map((projectData, key) => {
          return <ProjectCard key={key} projectData={projectData} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
