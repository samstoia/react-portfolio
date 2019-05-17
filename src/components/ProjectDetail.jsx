import React from 'react';
import '../styles/ProjectDetail.css';

const ProjectDetail = (props) => {
  let properties = props.location.state;

  return (
    <div className="projectDetailContainer">
      <div className="imgDiv">
        {/* <a href={properties.url}></img></a> */}
        <img src={properties.image} alt="project screenshot" />
      </div>
      <div className="detailsDiv">
        <h3>{properties.title}</h3>

        <p><em>{properties.technologiesUsed}</em></p>
        <p>{properties.synopsis}</p>
      </div>
    </div>

  );
}

export default ProjectDetail;