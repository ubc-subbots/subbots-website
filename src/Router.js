import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import Container from 'react-bootstrap/Container';
import {
    Home,
    Projects,
    Sponsors,
    Software,
    Mechanical,
    Electrical,
    Join
} from './features';

export default function router(){
    return (
        <main>
            <ScrollToTop/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/teams/software" component={Software} />
                <Route path="/teams/mechanical" component={Mechanical} />
                <Route path="/teams/electrical" component={Electrical} />
                <Route path="/projects" component={Projects} />
                <Route path="/sponsors" component={Sponsors} />
                <Route path="/join" component={Join} />
            </Switch>
        </main>
    )
}
