import React from 'react';
import Project from './Project';

let masterProjectList = [
  {
    title: 'ConeAPalooza',
    description: 'App built in Angular',
    technologiesUsed: 'Angular, Firebase',
    image: '',
  },
  {
    title: 'EpicEats',
    description: 'Food Ordering Platform',
    technologiesUsed: 'Angular, Firebase',
    image: '',
  },
  {
    title: "Sam's Tap Room",
    description: 'App built in React',
    technologiesUsed: 'React',
    image: '',
  },
  {
    title: "Go'Leir",
    description: 'JavaScript Text-Based RPG',
    technologiesUsed: 'JavaScript',
    image: '',
  },

  {
    title: "GameBuster",
    description: 'Game Database Search',
    technologiesUsed: 'C#, MySql, ASP.NET Core',
    image: '',
  },
  {
    title: "HairSalon",
    description: 'Hair Salon Client Management System',
    technologiesUsed: 'C#, MySql, ASP.NET Core',
    image: '',
  },
]

function Projects() {


  return (
    <div>
      {masterProjectList.map((project, index) =>
        <Project title={project.title}
          description={project.description}
          technologiesUsed={project.technologiesUsed}
        />
      )}
    </div>
  );
}

export default Projects;