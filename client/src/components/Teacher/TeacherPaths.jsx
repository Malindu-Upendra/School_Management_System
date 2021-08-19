import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoticeInsertForm from "./SubjectMaterial/NoticeInsertionForm/NoticeInsertForm";
import SubjectMaterialInsertionForm from "./SubjectMaterial/SubjectMaterialInsertionForm/SubjectMaterialInsertionForm";

class TeacherPaths extends Component{
    render() {
        return(
            <Router>
                <Switch>
                    <Route path="/teacher/subjectMaterial/noticeInsertForm" component={NoticeInsertForm} exact/>
                    <Route path="/teacher/subjectMaterial/subjectMaterialInsertForm" component={SubjectMaterialInsertionForm} exact/>
                </Switch>
            </Router>
        )
    }
}

export default TeacherPaths