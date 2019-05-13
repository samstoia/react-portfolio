import React from 'react';
import '../styles/Project.css';
import { Link } from "react-router-dom";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    }
    this.onHover = this.onHover.bind(this);
    this.onLeave = this.onLeave.bind(this);
  };

  onHover = () => {
    this.setState({ isHovering: true })
  }

  onLeave = () => {
    this.setState({ isHovering: false })
  }

  render() {

    return (
      <div className="projectCard" onMouseOver={this.onHover} onMouseLeave={this.onLeave} style={{
        gridArea: `${this.props.gridarea}`
      }}>
        <Link to={{
          pathname: `./projects/${this.props.id}`,
          state: {
            title: this.props.title,
            description: this.props.description,
            technologiesUsed: this.props.technologiesUsed,
            image: this.props.image,
            url: this.props.url
          }
        }}>
          <div className="background" style={{ backgroundImage: `url(${this.props.image})` }}>
            {this.state.isHovering ?
              <div style={{ display: "inline-block" }}>
                <h3>{this.props.title}</h3>
                <p><em>{this.props.description}</em></p>
                <p>{this.props.technologiesUsed}</p>
              </div> : null}
          </div>
        </Link>


      </div >
    );
  }
}

export default Project;