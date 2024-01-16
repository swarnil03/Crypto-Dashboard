import React, { Component } from "react";
import { RxGithubLogo } from "react-icons/rx";

export class Footer extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "#49108B", padding: "40px" }}
        >
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <p className="mb-0">
              <a
                href="https://github.com/swarnil03"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  color: "#ffffff", // Set the color to match your design
                }}
              >
                <RxGithubLogo />
                <span style={{ marginLeft: "2px" }}>Github</span>
              </a>
            </p>
          </div>
        </nav>
      </div>
    );
  }
}

export default Footer;
