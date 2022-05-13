import React from "react";
import { Link, NavLink } from "react-router-dom";

/** Navigation bar for site. Shows up on every page.
 *
 * Rendered by App.
 */

function NavBar() {
  return (
    <nav className="Navigation navbar navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Pix.ly
        </Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item me-4">
            <NavLink className="nav-link" to="/">
              All Photos
            </NavLink>
          </li>
          <li className="nav-item me-4">
            <NavLink className="nav-link" to="/upload">
              Upload
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
