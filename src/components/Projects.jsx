import React from 'react';
import Project from './Project';
import goLeir from '../assets/images/goleir.PNG'
import taproom from '../assets/images/taproom.PNG';
import epiceats from "../assets/images/epiceats.PNG"
import cloneapalooza from "../assets/images/cloneapalooza.PNG";
import gamebuster from "../assets/images/gamebuster.PNG";
import barbershop from "../assets/images/barbershop.PNG";
import '../styles/Projects.css';

let masterProjectList = [
  {
    title: 'ConeAPalooza',
    description: 'App built in Angular',
    technologiesUsed: 'Angular, Firebase',
    image: cloneapalooza,
    projectUrl: "https://original-nation-140420.firebaseapp.com/",
    gridarea: "z",
  },
  {
    title: 'EpicEats',
    description: 'Food Ordering Platform',
    technologiesUsed: 'Angular, Firebase',
    image: epiceats,
    projectUrl: "https://mealdeliveryservice-946e3.firebaseapp.com/",
    gridarea: "y",
  },
  {
    title: "Sam's Tap Room",
    description: 'App built in React',
    technologiesUsed: 'React',
    image: taproom,
    projectUrl: "https://github.com/samstoia/react-tap-room",
    gridarea: "x",
  },
  {
    title: "Go'Leir",
    description: 'JavaScript Text-Based RPG',
    technologiesUsed: 'JavaScript',
    image: goLeir,
    projectUrl: "https://github.com/samstoia/rpg-game",
    gridarea: "v",
  },

  {
    title: "GameBuster",
    description: 'Game Database Search',
    technologiesUsed: 'C#, MySql, ASP.NET Core',
    image: gamebuster,
    projectUrl: "https://github.com/samstoia/GameSearchEngine.Project",
    gridarea: "u",
  },
  {
    title: "Barber Shop",
    description: 'Barber Shop Client Management System',
    technologiesUsed: 'C#, MySql, ASP.NET Core',
    image: barbershop,
    projectUrl: "https://github.com/samstoia/HairSalon.Solution",
    gridarea: "t",
  },
]

function Projects() {

  return (
    <div className="gridContainer">
      {masterProjectList.map((project, index) =>
        <Project title={project.title}
          description={project.description}
          technologiesUsed={project.technologiesUsed}
          image={project.image}
          url={project.projectUrl}
          id={index}
          gridarea={project.gridarea}
        />
      )}
    </div>

  );
}

export default Projects;