import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Logo from "./Components/Logo/Logo";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/HomePage";
import Projects from "./Pages/Projects";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Logo image={require("./Assets/HeritageHeroLogo.png")} />
        <Switch>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Router path="/">
            <Home />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
