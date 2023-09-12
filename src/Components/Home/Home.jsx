// Imports
import React from "react";
import photo from "./../Assets/Profile/img4.png";
import { BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import cv from "./../Assets/CV/Sailaja CV_Sept 2023.pdf";
import "./home.css";

//  Homepage
export default function Home() {
  return (
    // Header
    <header className="home" id="home">
      {/* home container */}
      <div className="home_container">
        {/*  home text container */}
        <div>
          {/* image of home container */}
          <img className="home_container_image" src={photo} alt="my pic" />
        </div>

        <div className="home_container_text">
          <h1 className="home_title">Sailaja</h1>
          <h2 className="home_subtitle">Junior Frontend Utvikler</h2>

          <div className="icons">
            <ul className="icons_list">
              <li className="icons_list_item_link">
                <a
                  className="icons_list_item_link"
                  href="https://github.com/Sailaja-kodehode/"
                  target="_blanc"
                >
                  <BsGithub />
                </a>
              </li>

              <li className="icons_list_item_link">
                <a
                  className="icons_list_item_link"
                  href="https://www.figma.com/file/cjoaVt77sDyxCIwvXOQ2w6/streamingSailaja?node-id=0%3A1&t=BIhjY9yJN2IHEEK8-0"
                  target="_blanc"
                >
                  <FaFigma />
                </a>
              </li>

              <li className="icons_list_item_link">
                <a
                  className="icons_list_item_link"
                  href="sailaja.kodehode@gmail.com"
                  target="_blanc"
                >
                  <SiGmail />
                </a>
              </li>

              <li className="icons_list_item_link">
                <a
                  className="icons_list_item_link"
                  href="https://www.linkedin.com/in/sailaja-posupulate-1436781a/"
                  target="_blanc"
                >
                  <ImLinkedin />
                </a>
              </li>
            </ul>
          </div>
          {/* two Buttons to link CV and Contact page */}
          <div className="button-link">
            <button className="home_button">
              <a
                href="
#contact"
                className="link"
                target="_blanc"
              >
                Kontakt
              </a>
            </button>
            <button className="home_button">
              <a className="link" link={cv} href={cv} target="_blanc">
                Min CV{" "}
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
