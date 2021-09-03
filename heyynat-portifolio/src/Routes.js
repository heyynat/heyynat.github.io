import Profile from "./pages/Profile"
import Projects from "./pages/Projects"
import NotFound from "./pages/NotFound"
import About from './pages/About';
import { Route, Switch } from "react-router-dom";

export const Routes = () => {
    return (
    <Switch>
        <Route exact path="/" component={Profile} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="*" component={NotFound} />
    </Switch>
    )
}

export default Routes;
