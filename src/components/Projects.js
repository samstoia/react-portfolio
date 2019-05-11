import React from 'react';
import Project from './Project';
import goLeir from '../assets/images/goleir.PNG'
import taproom from '../assets/images/taproom.PNG';
import epiceats from "../assets/images/epiceats.PNG"
import cloneapalooza from "../assets/images/cloneapalooza.PNG";
import gamebuster from "../assets/images/gamebuster.PNG";
import barbershop from "../assets/images/barbershop.PNG";

let masterProjectList = [
  {
    title: 'ConeAPalooza',
    description: 'App built in Angular',
    technologiesUsed: 'Angular, Firebase',
    image: cloneapalooza,
  },
  {
    title: 'EpicEats',
    description: 'Food Ordering Platform',
    technologiesUsed: 'Angular, Firebase',
    image: epiceats,
  },
  {
    title: "Sam's Tap Room",
    description: 'App built in React',
    technologiesUsed: 'React',
    image: taproom,
  },
  {
    title: "Go'Leir",
    description: 'JavaScript Text-Based RPG',
    technologiesUsed: 'JavaScript',
    image: goLeir
  },

  {
    title: "GameBuster",
    description: 'Game Database Search',
    technologiesUsed: 'C#, MySql, ASP.NET Core',
    image: gamebuster,
  },
  {
    title: "Barber Shop",
    description: 'Barber Shop Client Management System',
    technologiesUsed: 'C#, MySql, ASP.NET Core',
    image: barbershop,
  },
]

function Projects() {


  return (
    <div>
      {masterProjectList.map((project, index) =>
        <Project title={project.title}
          description={project.description}
          technologiesUsed={project.technologiesUsed}
          image={project.image}
          id={index}
        />
      )}
    </div>
  );
}

export default Projects;