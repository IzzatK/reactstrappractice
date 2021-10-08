import React, { Component } from "react";
import "./SidenavMenu.css";

const SideNavBar = () => {
  return (
    <nav class="navbar bg-success" id="sidenavbar">
      <ul class="nav navbar-nav" id="sidenavbar">
        <li class="nav-item">
          <a class="nav-link" href="#">
            {" "}
            Home{" "}
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            {" "}
            Services{" "}
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            {" "}
            Contact{" "}
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            {" "}
            Blogs{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
};

const SidenavMenu = () => {
  return <>{SideNavBar()}</>;
};
export default SideNavBar;
