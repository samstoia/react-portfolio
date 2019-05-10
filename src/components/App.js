import React, { Component } from 'react'
// import Error404 from "./Error404";
import Homepage from './Homepage';
import About from './About';
import Projects from './Projects';
import ProjectDetail from './ProjectDetail';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>

        <div>
          <Route exact path="/" component={Homepage} />

          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/projects/id" component={ProjectDetail}
          // {/* <Route component={Error404} /> */}
          />
        </div>
      </Router>

    )
  }
}


export default App;
