import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from "./Profile/Profile";
import AddEvent from "../Public/Events/AddEvent/AddEvent";
import DisplayEvents from "../Public/Events/DisplayEvents/DisplayEvents";
import UpdateEvent from "../Public/Events/UpdateEvent/UpdateEvent";
import HomePage from "../Public/Home/HomePage";
import SubjectMaterials from "./SubjectMaterials/SubjectMaterials";
import ClassroomTimeTable from "./Timetables/ClassroomTimeTable";
import ExamTimetable from "./Timetables/ExamTimeTable";

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
                    <Route path="/getSubjectMaterials/:grade/:subject" component={SubjectMaterials} exact/>
                    <Route path="/getClassRoomTimeTable/:grade" component={ClassroomTimeTable} exact/>
                    <Route path="/getExamTimeTable/:grade" component={ExamTimetable} exact/>
                </Switch>
            </Router>

        )
    }
}

export default StudentPaths;

