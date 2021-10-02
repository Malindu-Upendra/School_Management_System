import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DisplayEvents from "./Events/DisplayEvents/DisplayEvents";
import ClassroomTimetable from "./Timetables/ClassRoomReport";
import ExamTimetable from "./Timetables/examTimetable";
import HomePage from "./Home/HomePage";

class PublicPaths extends Component{

    render() {
        return(

            <Router>
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/displayEvent" component={DisplayEvents} exact/>
                    <Route path="/getClassRoomTimeTables" component={ClassroomTimetable} exact/>
                    <Route path="/getExamTimeTables" component={ExamTimetable} exact/>
                </Switch>
            </Router>

        )
    }
}

export default PublicPaths;

