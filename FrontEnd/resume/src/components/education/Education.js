import React from "react";
import "./Education.css";
import { Link } from "react-router-dom";

function Education() {
  return (
    <div className="body">
      <form className="form">
        <div>
          <h1>Education Details</h1>
          <div>
            <input
              type="text"
              className="input1"
              placeholder="College/University"
            />
            <input
              type="date"
              id="date"
              placeholder="dd-mm-yyyy"
              title="Start Date"
            />
            <input
              type="date"
              id="date"
              placeholder="dd-mm-yyyy"
              title="End Date"
            />
          </div>
          <div>
            <input type="text" className="qual" placeholder="Qualification" />
            <input type="text" className="des" placeholder="Description" />
          </div>
          <div>
            <input
              type="text"
              className="input1"
              placeholder="College/University"
            />
            <input
              type="date"
              id="date"
              placeholder="dd-mm-yyyy"
              title="Start Date"
            />
            <input
              type="date"
              id="date"
              placeholder="dd-mm-yyyy"
              title="End Date"
            />
          </div>
          <div>
            <input type="text" className="qual" placeholder="Qualification" />
            <input type="text" className="des" placeholder="Description" />
          </div>
          <br></br>
          <div>
            <Link to="/">
              <input
                type="button"
                className="button1"
                value=" &lt; back"
              ></input>
            </Link>
            <Link to="/project">
              {/* <button>next</button> */}

              <input type="button" className="button1" value=" next &gt;" />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Education;
