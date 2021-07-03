import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MyProjects from './pages/MyProjects';
import Profile from './components/Profile';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Header />
        <Switch>
          <Route exact path="/"><Profile /></Route>
          <Route path="/myprojects"><MyProjects /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
        <footer class="footer">
          <div class="content has-text-centered">
            <p>
              Constantemente aprimorado por <a href="https://github.com/heyynat"> <strong>Natali Lima</strong></a>.
            </p>
          </div>
        </footer>
      </BrowserRouter>
    );
  }
}

export default App;
