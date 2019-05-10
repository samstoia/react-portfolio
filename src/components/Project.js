import React from 'react';
import '../styles/Project.css';

function Project(props) {


  return (
    <div className="projectCard">
      <img src={props.image}></img>
      <h3>{props.title}</h3>
      <p><em>{props.description}</em></p>
      <p>{props.technologiesUsed}</p>
    </div>
  );
}

export default Project;