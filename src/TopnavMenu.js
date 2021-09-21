import React, { Component } from "react";
import "./TopnavMenu.css";
import CloudPic from "./cloud.png";

export default class TopnavMenu extends Component {
  render() {
    return (
      <>
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar w/ text</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav> */}
        <nav class="navbar bg-dark navbar-expand-sm navbar-dark" id="topnav">
          <div class="container" id="navcontainer">
            <a class="navbar-brand" href="#">
              <img
                src={CloudPic}
                style={{ width: "21%", height: "auto" }}
                class="img-thumbnail"
                alt="cloudpic"
              />
            </a>
            <h2 class="text-white">Kloudstudio</h2>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
