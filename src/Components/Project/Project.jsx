// Christmas project back time count down Using React
// Github icon import
import React from "react";
import "./project.css";
import { BsGithub } from "react-icons/bs";
import { FcBriefcase } from "react-icons/fc";
// Figma icon
import { FaFigma } from "react-icons/fa";

import christmasImg1 from "./../Assets/Gallery/Project1/Christmas1.png";
//pokemon project module c
import pokemonImg1 from "./../Assets/Gallery/Project2/pokemon.png";
// Solar quiz group project images
import solarQuizImg1 from "./../Assets/Gallery/Project3/quiz1.png";
// Streaming site images
import StreamingImg1 from "./../Assets/Gallery/Project4/streaming1.png";

import { useState } from "react";
function Projects() {
  let projects = [
    //  project name,project description, figma n github links
    {
      projectName: "Christmas",
      img1: christmasImg1,

      github: "https://github.com/Sailaja-kodehode/ChristmasProject.git",
      figma:
        "https://www.figma.com/file/cjoaVt77sDyxCIwvXOQ2w6/streamingSailaja?node-id=511%3A79&t=u6EmTulzmdwe9Jya-0",
      aboutProject:
        "Countdown timer til jul som teller ned baklengs ,skrive inn en julehilsen, som lagres i localstorage og vises på siden med en timestamp. ",
    },

    {
      projectName: "Pokemon",
      img1: pokemonImg1,
      github: "https://github.com/Sailaja-kodehode/pokemon.git",
      figma: "",
      aboutProject:
        "Pokemon Api-forespørsel, visning, se pokémonindeks, detaljert kort og knapper (hjem, neste, før og søk)",
      // " Pokemon Api request,display,view pokemon index,detailed Card and buttons(home,next,pre and search). ",
    },
    {
      projectName: "Streaming",
      img1: StreamingImg1,
      figma:
        "https://www.figma.com/file/cjoaVt77sDyxCIwvXOQ2w6/streamingSailaja?node-id=0%3A1&t=u6EmTulzmdwe9Jya-0",
      aboutProject: " Figma design for NRK strømmeplattform. ",
      // " Figma design for  NRK streaming platform. ",
    },
    {
      projectName: "Solar Quiz",
      img1: solarQuizImg1,
      github: "https://github.com/Erlandino/autmn-project",
      figma:
        "https://www.figma.com/file/EG0HAnVadfGMGMQDkvoX8y/Design-quiz-site?node-id=127%3A102&t=DtfxwHRflpvvY3UF-0",
      aboutProject:
        "Det er et gruppeprosjekt vi har gjort i Autumn holidays Quiz-app som inkluder registrerings, spørreskjema og resultat",
      // " It's, a group project we have done in Autumn holidays Quiz app which includes registration page,questionary n result page  ",
    },
  ];
  const [imgSet, setImgSet] = useState(0);

  function projectSelect(index) {
    setImgSet(() => index);
  }
  //need to add figma n github link github, figma
  const { img1, projectName, aboutProject, github, figma } = projects[imgSet];
  return (
    <section className="projects" id="projects">
      <h2 className="projects_title"> Prosjekter</h2>
      <div className="projects_container">
        {/* when we click on project name it will active the project Name n display the projects_links n project description */}
        <div className="projects_nav">
          <button
            className={`projects_button ${
              projectName === "Christmas" && "projects_button-active"
            }`}
            onClick={() => projectSelect(0)}
          >
            Christmas
          </button>
          <button
            className={`projects_button ${
              projectName === "Pokemon" && "projects_button-active"
            }`}
            onClick={() => projectSelect(1)}
          >
            {" "}
            Pokemon
          </button>
          <button
            className={`projects_button ${
              projectName === "Streaming" && "projects_button-active"
            }`}
            onClick={() => projectSelect(2)}
          >
            Streaming Figma
          </button>
          <button
            className={`projects_button ${
              projectName === "Solar Quiz" && "projects_button-active"
            }`}
            onClick={() => projectSelect(3)}
          >
            Quiz
          </button>
        </div>
        {/*  */}

        <img src={img1} alt="" className="projects_image" />

        <div className="project_container">
          {aboutProject && (
            <a
              href={aboutProject}
              target="_blank"
              rel="noreferrer"
              className="projects_description"
            >
              {/* <p className="projects_description"> */}
              <FcBriefcase />
              Description: {aboutProject} {/* </p> */}
            </a>
          )}
        </div>
        <div className="project_container">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="project_link"
            >
              <BsGithub />
              <h4 className="projects_direction1">Github</h4>
            </a>
          )}
          {figma && (
            <a
              href={figma}
              target="_blank"
              rel="noreferrer"
              className="project_link"
            >
              <FaFigma />
              <h4 className="projects_direction">Figma</h4>
            </a>
          )}
        </div>
      </div>
      {/* </div> */}
      {/* <Carousel /> */}
    </section>
  );
}
export default Projects;
