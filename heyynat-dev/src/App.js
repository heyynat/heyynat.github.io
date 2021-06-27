import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MyProjects from './pages/MyProjects';
import Profile from './components/Profile';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Profile /></Route>
          <Route path="/myprojects"><MyProjects /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
