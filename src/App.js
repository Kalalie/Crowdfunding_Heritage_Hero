import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/HomePage";
import Projects from "./Pages/Projects";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

// import About from "./pages/About";
// import Contact from "./pages/Contact";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div>
        <Nav image={require("./Assets/HeritageHeroLogo.png")} />
        <Switch>
          <Route path="/Projects/id:">
            <Projects />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
