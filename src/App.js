import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/HomePage";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer/Footer";
import FeaturedImage from "./Components/FeaturedImage/FeaturedImage";

// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Nav image={require("./Assets/HeritageHeroLogo.png")} />
        <FeaturedImage image={require("./Assets/MotheChandeniers.jpg")} />
        <Switch>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Router path="/">
            <Home />
          </Router>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
