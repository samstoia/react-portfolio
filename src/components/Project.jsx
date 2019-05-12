import React from 'react';
import '../styles/Project.css';
import { Link } from "react-router-dom";


function Project(props) {

  return (
    <div className="projectCard" style={{
      gridArea: `${props.gridarea}`
    }} >
      <Link to={{
        pathname: `./projects/${props.id} `,
        state: {
          title: props.title,
          description: props.description,
          technologiesUsed: props.technologiesUsed,
          image: props.image,
          url: props.url
        }
      }}>
        <img src={props.image} alt="project screenshot"></img>
      </Link>

      <h3>{props.title}</h3>
      <p><em>{props.description}</em></p>
      <p>{props.technologiesUsed}</p>
    </div >
  );
}

export default Project;