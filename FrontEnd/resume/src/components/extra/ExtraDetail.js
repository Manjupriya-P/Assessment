import { Link } from "react-router-dom";
import React from "react";
import "./Extra.css";

function ExtraDetail() {
  return (
    <div className="body">
      <form className="form">
        <h1>Extra Details</h1>
        <h3 className="h3">Skills/Languages</h3>
        <div>
          <div>
            <input type="text" className="inp" placeholder="skill 1"></input>
            <input type="text" className="inp" placeholder="skill 2"></input>
            <input type="text" className="inp" placeholder="skill 3"></input>
          </div>
          <div>
            <input type="text" className="inp" placeholder="skill 4"></input>
            <input type="text" className="inp" placeholder="skill 5"></input>
            <input type="text" className="inp" placeholder="skill 6"></input>
          </div>
        </div>
        <h3 className="h3"> &nbsp;&nbsp; &nbsp;&nbsp;Interest</h3>
        <div>
          <div>
            <input type="text" className="inp" placeholder="Interest 1"></input>
            <input type="text" className="inp" placeholder="Interest 2"></input>
            <input type="text" className="inp" placeholder="Interest 3"></input>
          </div>
          <div>
            <input type="text" className="inp" placeholder="Interest 4"></input>
            <input type="text" className="inp" placeholder="Interest 5"></input>
            <input type="text" className="inp" placeholder="Interest 6"></input>
          </div>
        </div>
        <br></br>
        <div>
          <Link to="/experience">
            <input type="button" className="button1" value=" &lt; back"></input>
          </Link>

          <input type="button" className="button2" value=" next &gt;" />
        </div>
      </form>
    </div>
  );
}

export default ExtraDetail;
