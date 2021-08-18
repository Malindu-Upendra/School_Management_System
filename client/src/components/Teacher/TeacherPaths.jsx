import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoticeInsertForm from "./SubjectMaterial/NoticeInsertionForm/NoticeInsertForm";

class TeacherPaths extends Component{
    render() {
        return(
            <Router>
                <Switch>
                    <Route path="/teacher/subjectMaterial/noticeInsertForm" component={NoticeInsertForm} exact/>
                </Switch>
            </Router>
        )
    }
}

export default TeacherPaths