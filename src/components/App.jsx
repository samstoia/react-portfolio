import React, { Component } from 'react'
import Error404 from "./Error404";
import Homepage from './Homepage';
import About from './About';
import Projects from './Projects';
import ProjectDetail from './ProjectDetail';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from './Contact';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={ProjectDetail} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Error404} />
        </Switch>

      </BrowserRouter>

    )
  }
}


export default App;
