// import { Link } from "react-router-dom";
import SideNavItem from "./SideNavItem";
import "./AdminSideNav.css";

import { Link } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
// import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const AdminSideNav = () => {
  const [toggleNav, setToggleNav] = useState(true);
  return (
    <div
      id="sidenav"
      className=" pb-4"
      //  style={{ background: "black" }}
    >
      {toggleNav && (
        <>
          <nav className="d-block u">
            <ul
              className="navbar-nav  text-left"
              style={{ justifyContent: "flex-start" }}
            >
              <SideNavItem />
            </ul>
          </nav>
        </>
      )}
      <div style={{}} className="nav-footer">
        <Link to="/" className="logout   ">
          <RiLogoutBoxRLine className="mx-1 " />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default AdminSideNav;
