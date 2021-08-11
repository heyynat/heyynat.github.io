import Profile from "./components/Profile"
import MyProjects from "./pages/MyProjects"
import NotFound from "./pages/NotFound"
import About from './pages/About';
import { Route, Switch } from "react-router-dom";

const Routes = () => {
    return (
    <Switch>
        <Route exact path="/" component={Profile} />
        <Route path="/myprojects" component={MyProjects} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
    </Switch>
    )
}

export default Routes;
