import React from "react";
import "./footer.css";
import { BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer_list">
        <li className="footer_list_item_link">
          <a
            className="footer_list_item_link"
            href="https://github.com/Sailaja-kodehode/"
            target="_blanc"
          >
            <BsGithub />
          </a>
        </li>
        <hr />
        <li className="footer_list_item_link">
          <a
            className="footer_list_item_link"
            href="https://www.figma.com/file/cjoaVt77sDyxCIwvXOQ2w6/streamingSailaja?node-id=0%3A1&t=BIhjY9yJN2IHEEK8-0"
            target="_blanc"
          >
            <FaFigma />
          </a>
        </li>
        <hr />
        <li className="footer_list_item_link">
          <a
            className="footer_list_item_link"
            href="sailaja.kodehode@gmail.com"
            target="_blanc"
          >
            <SiGmail />
          </a>
        </li>
        <hr />
        <li className="footer_list_item_link">
          <a
            className="footer_list_item_link"
            href="https://www.linkedin.com/in/sailaja-posupulate-1436781a/"
            target="_blanc"
          >
            <ImLinkedin />
          </a>
        </li>
        <p className="footer_list_item">
          Design og innhold &copy; Sailaja&nbsp;Posupulate 2023
        </p>
      </ul>
    </div>
  );
}
export default Footer;
