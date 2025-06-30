import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px" }}>
      <Link to="/" style={{ marginRight: "15px" }}>
        Home
      </Link>
    </nav>
  );
}

export default Navbar;
