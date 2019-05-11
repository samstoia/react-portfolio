import React from 'react';

const ProjectDetail = (props) => {
  console.log(props.location.state)

  return (
    <div>
      <div>
        <img src={props.location.state.image}></img>
        <h3>{props.location.state.title}</h3>
        <p><em>{props.location.state.description}</em></p>
        <p>{props.location.state.technologiesUsed}</p>
      </div>
    </div>
  );
}

export default ProjectDetail;