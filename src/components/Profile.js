import React, { Component } from "react";
import { Button } from "react-bootstrap";
// import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/abiralblon1999/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linked.com/abiralblon">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.youtube.com/abiralblon">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://www.instagram.com/blon_abiral/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.github.com/abiraltamang">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primart-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Abiral</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                Full stack MERN developer
                {""}
                {/* <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev",
                    1000,
                    "Fullstack Developer",
                    1000,
                    "Part-time Youtuber",
                    1000,
                    "MERN stack developer",
                    1000,
                    "React/React Native Dev",
                    1000,
                  ]}
                /> */}
              </h1>
              <span className="profile-role-tagline">
                I am the one who is daamiii
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire me
            </button>
            <a href="abiral.pdf" download="Abiral Tamang.pdf">
              <button className="btn highlighted-btn">Get Resume </button>
            </a>
          </div>
        </div>
        <div className="profile-pictures">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
