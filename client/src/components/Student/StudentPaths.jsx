import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from "./Profile/Profile";
import AddEvent from "../Public/Events/AddEvent/AddEvent";
import DisplayEvents from "../Public/Events/DisplayEvents/DisplayEvents";
import UpdateEvent from "../Public/Events/UpdateEvent/UpdateEvent";
import HomePage from "../Public/Home/HomePage";

class StudentPaths extends Component{

    render() {
        return(

            <Router>
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/profile" component={Profile} exact/>
                    <Route path="/addEvent" component={AddEvent} exact/>
                    <Route path="/displayEvent" component={DisplayEvents} exact/>
                    <Route path="/updateEvent/:id" component={UpdateEvent} exact/>
                </Switch>
            </Router>

        )
    }
}

export default StudentPaths;

