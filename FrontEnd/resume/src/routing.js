import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import ExtraDetail from "./components/extra/ExtraDetail";
import Header from "./components/header/Header";
import Personal from "./components/personal/Personal";
import Project from "./components/project/Project";

const routing = (
  <div>
    <BrowserRouter>
      <div>
        {/* <Link to="/education">Education</Link> */}
        {/* <Link to="/Project">project</Link>
        <Link to="/Experience">Experience</Link>
        <Link to="/ExtraDetail">Extra</Link> */}
      </div>
      {/* <div> */}
      <Link to="/"></Link>
      <Route path="/" component={Header} />
      <Route exact path="/" component={Personal}></Route>
      <Route path="/education" component={Education} />
      <Route path="/project" component={Project}></Route>
      <Route path="/experience" component={Experience}></Route>
      <Route path="/extraDetail" component={ExtraDetail}></Route>
      {/* </div> */}
    </BrowserRouter>
  </div>
);

export default routing;
