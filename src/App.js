import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/HomePage";
import Projects from "./Pages/Projects/Projects";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import NotFound from "./Components/404Page/404";
import CreateProject from "./Pages/CreateProject";

// import About from "./pages/About";
// import Contact from "./pages/Contact";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div>
        <Nav image={require("./Assets/HeritageHeroLogo.png")} />
        <Switch>
          <Route path="/project/:id">
            <Projects />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/create-project">
            <CreateProject />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*" component={NotFound}>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
