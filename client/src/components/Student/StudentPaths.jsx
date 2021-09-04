import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from "./Profile/Profile";
import AddEvent from "../Public/Events/AddEvent/AddEvent";
import DisplayEvents from "../Public/Events/DisplayEvents/DisplayEvents";

class StudentPaths extends Component{

    render() {
        return(

            <Router>
                <Switch>
                    <Route path="/profile" component={Profile} exact/>
                    <Route path="/addEvent" component={AddEvent} exact/>
                    <Route path="/displayEvent" component={DisplayEvents} exact/>
                </Switch>
            </Router>

        )
    }
}

export default StudentPaths;

