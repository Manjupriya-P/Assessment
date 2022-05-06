import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";
function Project() {
  return (
    <div className="body">
      <form className="form">
        <div>
          <div>
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            <h1> Projects Developed</h1>
            <h3 className="h3">Project 1</h3>
            <input type="text" className="input2" placeholder="title"></input>
            <input type="text" className="input2" placeholder="link"></input>
            <input
              type="text"
              className="input2"
              placeholder="Description"
            ></input>
          </div>
          <div>
            <h3 className="h3">Project 2</h3>
            <input type="text" className="input2" placeholder="title"></input>
            <input type="text" className="input2" placeholder="link"></input>
            <input
              type="text"
              className="input2"
              placeholder="Description"
            ></input>
          </div>
          <br></br>

          <div>
            <Link to="/education">
              <input
                type="button"
                className="button1"
                value=" &lt; back"
              ></input>
            </Link>
            <Link to="/experience">
              <input type="button" className="button1" value=" next &gt;" />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Project;
