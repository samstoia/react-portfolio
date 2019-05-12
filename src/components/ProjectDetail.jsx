import React from 'react';

const ProjectDetail = (props) => {
  let properties = props.location.state;

  return (
    <div>
      <div>
        <a href={properties.url}><img src={properties.image} alt="project screenshot"></img></a>
        <h3>{properties.title}</h3>
        <p><em>{properties.description}</em></p>
        <p>{properties.technologiesUsed}</p>
      </div>
    </div>
  );
}

export default ProjectDetail;