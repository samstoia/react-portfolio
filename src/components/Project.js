import React from 'react';

function Project(props) {


  return (
    <div className="projectCard" style={{
      backgroundImage: `url(${props.image}`
    }}>
      <h3>{props.title}</h3>
      <p><em>{props.description}</em></p>
      <p>{props.technologiesUsed}</p>
    </div>
  );
}

export default Project;