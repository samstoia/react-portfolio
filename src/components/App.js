import React, { Component } from 'react'
// import Error404 from "./Error404";
import Homepage from './Homepage';
import About from './About';
import Projects from './Projects';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Homepage} />
          {/* <Route component={Error404} /> */}
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </div>
      </Router>

    )
  }
}


export default App;
