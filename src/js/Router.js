import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import {
    Home,
    Projects,
    Sponsors,
    Teams,
    Join,
    Members
} from '../features';

export default function router(){
    return (
        <main>
            <ScrollToTop/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/teams" component={Teams} />
                <Route path="/projects" component={Projects} />
                <Route path="/sponsors" component={Sponsors} />
                <Route path="/join" component={Join} />
                <Route path="/members" component={Members} />
            </Switch>
        </main>
    )
}
