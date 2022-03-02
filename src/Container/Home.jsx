import react, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "../Components/Contact";
import Dashboard from "../Components/Dashboard";
import Header from "../Components/Header";
import Project from "../Components/ProjectComponents/Project";
import Blog from "../Components/BlogComponents/Blog";
import Sidebar from "./Sidebar";

class Home extends react.Component {
  render() {
    return (
      <Router>
        <div className="md:hidden block">
          <Header />
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1">
          <div className="md:block hidden">
            <Sidebar />
          </div>
          <div className="md:col-span-2 lg:col-span-3 mx-auto">
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/Contact">
                <Contact />
              </Route>
              <Route path="/Project">
                <Project />
              </Route>
              <Route path="/Blog">
                <Blog />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default Home;
