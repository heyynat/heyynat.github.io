import Profile from "./components/Profile"
import MyProjects from "./pages/MyProjects"
import NotFound from "./pages/NotFound"
import About from './pages/About';
import { Route, Switch } from "react-router-dom";

const Routes = () => {
    return (
    <Switch>
        <Route exact path="/"><Profile /></Route>
        <Route path="/myprojects"><MyProjects /></Route>
        <Route path="/about"><About /></Route>
        <Route path="*"><NotFound /></Route>
    </Switch>
    )
}

export default Routes;
