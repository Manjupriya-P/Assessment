import React from "react";

import { Link } from "react-router-dom";
import "./Personal.css";

function Personal() {
  return (
    <div>
      <div className="body">
        <form className="form">
          <div>
            <h1 className="h1">Personal Details</h1>
          </div>
          <div>
            <div>
              <input type="text" className="input" placeholder=" First Name" />
              <input type="text" className="input" placeholder="Last Name" />
            </div>
            <div>
              <input type="text" className="input" placeholder="Email*" />
              <input
                type="number"
                className="input"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <input type="url" className="input" placeholder="Your Website" />
              <input type="url" className="input" placeholder="Git Hub" />
            </div>
            <div>
              <input type="url" className="input" placeholder="Linked In" />
              <input type="url" className="input" placeholder="Twitter" />
            </div>
            <div>
              <input type="url" className="input" placeholder="Facebook" />
              <input type="url" className="input" placeholder="Instagram" />
            </div>
            <br></br>
            <div>
              <input type="button" className="bt1" value=" &lt; back"></input>
              <Link to="/education">
                <button className="bt2">next &gt;</button>
              </Link>
              {/* <button className="button2">next &gt;</button> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Personal;
