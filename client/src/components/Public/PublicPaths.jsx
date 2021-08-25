import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddEvent from "./Events/AddEvent/AddEvent";
import DisplayEvents from "./Events/DisplayEvents/DisplayEvents";

class PublicPaths extends Component{

    render() {
        return(

            <Router>
                <Switch>
                    <Route path="/addEvent" component={AddEvent} exact/>
                    <Route path="/displayEvent" component={DisplayEvents} exact/>
                </Switch>
            </Router>

        )
    }
}

export default PublicPaths;

