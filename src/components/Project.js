import React from 'react';
import '../styles/Project.css';
import { Link } from "react-router-dom";


function Project(props) {

  return (
    <div className="projectCard">
      <Link to={{
        pathname: `./projects/${props.id}`,
        state: {
          title: props.title,
          description: props.description,
          technologiesUsed: props.technologiesUsed,
          image: props.image
        }
      }}>
        <img src={props.image}></img>
      </Link>

      {/* <Link to={`/project-detail/${props.id}`}
        title={props.title}
        description={props.description}
        technologiesUsed={props.technologiesUsed}
        image={props.image}
        key={props.key}>
        <img src={props.image}></img></Link> */}

      <h3>{props.title}</h3>
      <p><em>{props.description}</em></p>
      <p>{props.technologiesUsed}</p>
    </div>
  );
}

export default Project;