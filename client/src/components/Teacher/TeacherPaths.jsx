import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoticeInsertForm from "./SubjectMaterial/NoticeInsertionForm/NoticeInsertForm";
import SubjectMaterialInsertionForm from "./SubjectMaterial/SubjectMaterialInsertionForm/SubjectMaterialInsertionForm";
import MathematicsSubjectView from "./SubjectMaterial/StudentSubjectMaterialRetreive/MathematicsSubjectView";
import MathematicsTeachersView from "./SubjectMaterial/TeacherSubjectMaterialRetreive/MathematicsTeachersView";
import Classroom_timetable from "./ClassroomTimetableInsertForm/Classroom_timetable";
import ScienceTeachersView from "./SubjectMaterial/TeacherSubjectMaterialRetreive/ScienceTeachersView";
import ScienceSubjectView from "./SubjectMaterial/StudentSubjectMaterialRetreive/ScienceSubjectView";


class TeacherPaths extends Component{
    render() {
        return(
            <Router>
                <Switch>
                    {/*paths of Subject Materials function*/}
                    <Route path="/teacher/subjectMaterial/noticeInsertForm" component={NoticeInsertForm} exact/>
                    <Route path="/teacher/subjectMaterial/subjectMaterialInsertForm" component={SubjectMaterialInsertionForm} exact/>
                    <Route path="/teacher/subjectMaterial/MathematicsStudentView" component={MathematicsSubjectView} exact/>
                    <Route path="/teacher/subjectMaterial/MathematicsTeachersView" component={MathematicsTeachersView} exact/>
                    <Route path="/teacher/subjectMaterial/ScienceTeachersView" component={ScienceTeachersView} exact/>
                    <Route path="/teacher/subjectMaterial/ScienceSubjectView" component={ScienceSubjectView} exact/>

                    {/*path for insert classroomTimetable form*/}
                    <Route path="/teacher/classroom_timetable/timetableInsertForm" component={Classroom_timetable} exact/>
                </Switch>
            </Router>
        )
    }
}

export default TeacherPaths