import React from "react";
import "./skills.css";
import { SiHtml5 } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { DiJavascript1 } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
export default function Skills() {
  return (
    <section className="skill" id="skills">
      <h2 className="section_title">Ferdigheter</h2>
      {/* <h2 className="section_title">Ferdigheter</h2> */}
      {/* HTML5 */}
      <div className="skills_container" id="skills">
        <div className="skills">
          <SiHtml5 />
          {/* <img className="skills_image" src={html} alt="my pic" /> */}
          <p> HTML5</p>
        </div>
        <div className="skills">
          {/* <img className="skills_image" src={css} alt="my pic" /> */}
          <FaCss3 />
          <p> CSS</p>
        </div>
        <div className="skills_js">
          <DiJavascript1 />
          {/* <img className="skills_image" src={js} alt="my pic" /> */}
          <p>JavaScript</p>
        </div>
        <div className="skills">
          <FaReact />
          {/* <img className="skills_image" src={react} alt="my pic" /> */}
          <p> React</p>
        </div>
        <div className="skills">
          <TbSql />
          {/* <img className="skills_image" src={sql} alt="my pic" /> */}
          <p> Sql</p>
        </div>
        <div className="skills">
          <FaNode />
          {/* <img className="skills_image" src={node} alt="my pic" /> */}
          <p>Node Js</p>
        </div>
        <div className="skills">
          {/* <img className="skills_image" src={figma} alt="my pic" /> */}
          <CgFigma />
          <p>Figma</p>
        </div>
        <div className="skills">
          <BsGithub />
          {/* <img className="skills_image" src={github} alt="my pic" /> */}
          <p>Github</p>
        </div>
      </div>
    </section>
  );
}
