import React from "react";
import { Link } from "react-router-dom";

import "../CSS/task1.CSS";
const Navigate = () => {
  return (
    <div className="nav-name">
      <nav>
        <ul className="ul-name">
          <li className="li-nav">
            <Link to="/reg" className="reg-name">
              Register
            </Link>
          </li>
          <li className="li-nav">
            <Link to="/log" className="log-name">
              Login
            </Link>
          </li>
          <li className="li-nav">
            <Link to="/con" className="con-name">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigate;