import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddEvent from "./Events/AddEvent/AddEvent";

class PublicPaths extends Component{

    render() {
        return(

            <Router>
                <Switch>
                    <Route path="/addEvent" component={AddEvent} exact/>
                </Switch>
            </Router>

        )
    }
}

export default PublicPaths;

