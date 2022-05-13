import React from "react";
import { Link, NavLink } from "react-router-dom";

/** Navigation bar for site. Shows up on every page.
 *
 * Rendered by App.
 */

function NavBar() {
  return (
    <nav className="Navigation navbar navbar-expand-md">
      <Link className="navbar-brand" to="/">
        Pix.ly
      </Link>
      <NavLink to="/">All Photos</NavLink>
      <NavLink to="/upload">Upload</NavLink>
    </nav>
  );
}

export default NavBar;
