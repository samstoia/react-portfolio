import React from 'react';
import Project from './Project';
import goLeir from '../assets/images/goleir.PNG'
import taproom from '../assets/images/taproom.PNG';
import epiceats from "../assets/images/epiceats.PNG"
import cloneapalooza from "../assets/images/cloneapalooza.PNG";
import gamebuster from "../assets/images/gamebuster.PNG";
import barbershop from "../assets/images/barbershop.PNG";
import '../styles/Projects.css';
import Navbar from './Navbar';


let masterProjectList = [
  {
    title: 'CloneAPalooza',
    description: 'App built in Angular',
    technologiesUsed: 'Angular, Firebase, TypeScript',
    image: cloneapalooza,
    projectUrl: "https://original-nation-140420.firebaseapp.com/",
    gridarea: "z",
    synopsis: "The goal: To clone a popular website using a modular/component based page structure. I accomplished this using Angular as the framework, with some user data being persisted to Firebase on the back end."
  },
  {
    title: 'EpicEats',
    description: 'Food Ordering Platform',
    technologiesUsed: 'Angular, Firebase, TypeScript',
    image: epiceats,
    projectUrl: "https://mealdeliveryservice-946e3.firebaseapp.com/",
    gridarea: "y",
    synopsis: "A food ordering and delivery platform.  Restaurants can sell their food, users can buy it and have it delivered.  Order data gets stored in Firebase."
  },
  {
    title: "Sam's Tap Room",
    description: 'App built in React',
    technologiesUsed: 'React, CSS Grid, ',
    image: taproom,
    projectUrl: "https://samstoia.github.io/new-tap-room/#/",
    gridarea: "x",
    synopsis: "This is a system for a tap room to manage the kegs of beers that are for sale.  Tap a new keg, sell a growler, delete a beer from the tap list etc.  Keg levels are monitored until they sell out, and are alerted when it does sell out"
  },
  {
    title: "Go'Leir",
    description: 'JavaScript Text-Based RPG',
    technologiesUsed: 'JavaScript, CSS, HTML',
    image: goLeir,
    projectUrl: "https://github.com/samstoia/rpg-game",
    gridarea: "v",
    synopsis: "Saving the princess, battling orcs and dragons, helping the needy.  It's what you'll do when you play Go'Leir - our text-based RPG game."
  },

  {
    title: "GameBuster",
    description: 'Game Database Search',
    technologiesUsed: 'C#, MySQL, ASP.NET Core',
    image: gamebuster,
    projectUrl: "https://github.com/samstoia/GameSearchEngine.Project",
    gridarea: "u",
    synopsis: "A tool to search an extensive, custom-built SQL database of video games. Our records go all the way back to the 1970's.  Users can also add new games into the database."
  },
  {
    title: "Barber Shop",
    description: 'Barber Shop Client Management System',
    technologiesUsed: 'C#, MySql, ASP.NET Core',
    image: barbershop,
    projectUrl: "https://github.com/samstoia/HairSalon.Solution",
    gridarea: "t",
    synopsis: "An internal system for a barber shop to manage their stylist and client databses.  Client and Stylist data is stored in a MySQL database, as well as a stylist's specialties and client list."
  },
]

function Projects() {

  return (
    <div className="wrapper">
      <Navbar />
      <div className="pageTop">
        <h1>My Projects</h1>
      </div>
      <div className="gridContainer">

        {masterProjectList.map((project, index) =>
          <Project title={project.title}
            description={project.description}
            technologiesUsed={project.technologiesUsed}
            image={project.image}
            url={project.projectUrl}
            id={index}
            gridarea={project.gridarea}
            synopsis={project.synopsis}
          />
        )}

      </div>
    </div>





  );
}

export default Projects;