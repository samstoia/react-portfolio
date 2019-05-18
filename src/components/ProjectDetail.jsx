import React from 'react';
import '../styles/ProjectDetail.css';
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar';


const ProjectDetail = (props) => {
  let properties = props.location.state;

  return (
    <div className="pageWrapper">
      <Navbar />
      <div className="projectDetailContainer">

        <div className="imgDiv" style={{ backgroundImage: `url(${properties.image})` }}>
        </div>

        <div className="detailsDiv">
          <h3>{properties.title}</h3>

          <p><em>{properties.technologiesUsed}</em></p>
          <p>{properties.synopsis}</p>
          <a href={properties.url}><Button>Go To Project Page</Button></a>
        </div>
      </div >
    </div>


  );
}

export default ProjectDetail;