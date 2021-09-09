import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DisplayEvents from "./Events/DisplayEvents/DisplayEvents";

class PublicPaths extends Component{

    render() {
        return(

            <Router>
                <Switch>
                    <Route path="/displayEvent" component={DisplayEvents} exact/>
                </Switch>
            </Router>

        )
    }
}

export default PublicPaths;

