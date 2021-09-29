import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DisplayEvents from "./Events/DisplayEvents/DisplayEvents";
//import ReportT from "../Teacher/SubjectMaterial/ReportGenarationTest/ReportTest";
import HomePage from "./Home/HomePage";


class PublicPaths extends Component{

    render() {
        return(

            <Router>
                <Switch>
                    <Route path="/displayEvent" component={DisplayEvents} exact/>
                    <Route path="/" component={HomePage} exact/>
                    {/*//Report Generation Path*/}
                    {/*<Route path="/report" component={ReportT} exact/>*/}
                </Switch>
            </Router>

        )
    }
}

export default PublicPaths;

