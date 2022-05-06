import React from "react";
import { Link } from "react-router-dom";
import "./Experience.css";

function Experience() {
  return (
    <div className="body">
      <form className="form">
        <h1>Experience Details</h1>
        <h3 className="h3">Experience1</h3>
        <div>
          <input
            type="text"
            className="ip"
            placeholder="Institute or Organization"
          />
          <input type="text" className="ip" placeholder="Position" />
          <input type="text" className="ip" placeholder="Duration" />
          <input type="text" className="desc" placeholder="Description" />
        </div>
        <h3 className="h3">Experience1</h3>
        <div>
          <input
            type="text"
            className="ip"
            placeholder="Institute or Organization"
          />

          <input type="text" className="ip" placeholder="Position" />
          <input type="text" className="ip" placeholder="Duration" />
          <input type="text" className="desc" placeholder="Description" />
        </div>
        <br></br>
        <div>
          <Link to="/project">
            <input type="button" className="button1" value=" &lt; back"></input>
          </Link>

          <Link to="/extraDetail">
            <input type="button" className="button1" value=" next &gt;" />
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Experience;
