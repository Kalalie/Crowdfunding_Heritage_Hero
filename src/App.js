import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/HomePage";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer/Footer";
import FeaturedImage from "./Components/FeaturedImage/FeaturedImage";

// import About from "./pages/About";
// import Contact from "./pages/Contact";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div>
        <Nav image={require("./Assets/HeritageHeroLogo.png")} />
        <FeaturedImage image={require("./Assets/MotheChandeniers.jpg")} />
        <h1> Opened Projects </h1>
        <Switch>
          <Route path="/Projects/id:">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
