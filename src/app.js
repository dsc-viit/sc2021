import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Home } from './screens/home'
import { NeedHelp } from './screens/NeedHelp'
import { ProblemStatements } from './screens/problemstatements'

export const App = () => {
    return (<Router>
        <Routing />
    </Router>)
}




export const Routing = () => {
    return (
        <Switch>
            <Route path="/NeedHelp">
                <NeedHelp />
            </Route>
            <Route path="/ProblemStatements">
                <ProblemStatements />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}


