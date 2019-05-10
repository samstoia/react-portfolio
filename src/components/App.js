import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Error404 from "./Error404";
import Homepage from './Homepage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={Homepage} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }
}


export default App;
