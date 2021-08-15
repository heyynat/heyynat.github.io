import Profile from "./pages/Profile"
import Projects from "./pages/Projects"
import NotFound from "./pages/NotFound"
import About from './pages/About';
import { Route, Switch } from "react-router-dom";

const Routes = () => {
    return (
    <Switch>
        <Route exact path="/" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="*" component={NotFound} />
    </Switch>
    )
}

export default Routes;
