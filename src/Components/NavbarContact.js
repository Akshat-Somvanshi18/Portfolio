import React from "react";
import { Link } from "react-router-dom";
export default function NavbarContact(props) {
  return (
    <>

    {/* SECOND NAVBAR SECTION */}
      <ul className="nav bg-light d-flex justify-content-between">
        <li className="nav-item">
          <Link className="nav-link text-dark fs-5 my-1" to="/">
            MyPortfolio
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-dark fs-5 my-1" to="/">
            &#x2190; Go back
          </Link>
        </li>
      </ul>
    </>
  );
}
