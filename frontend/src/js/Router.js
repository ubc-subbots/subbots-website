import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import Container from 'react-bootstrap/Container';
import {
    Home,
    Projects,
    Sponsors,
    Teams,
    Join
} from '../features';

export default function router(){
    return (
        <main>
            <ScrollToTop/>
            <Switch>
                <Route exact path="/app" component={Home} />
                <Route path="/app/teams" component={Teams} />
                <Route path="/app/projects" component={Projects} />
                <Route path="/app/sponsors" component={Sponsors} />
                <Route path="/app/join" component={Join} />
            </Switch>
        </main>
    )
}
