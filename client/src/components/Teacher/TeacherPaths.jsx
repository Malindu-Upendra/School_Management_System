import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoticeInsertForm from "./SubjectMaterial/NoticeInsertionForm/NoticeInsertForm";
import SubjectMaterialInsertionForm from "./SubjectMaterial/SubjectMaterialInsertionForm/SubjectMaterialInsertionForm";
import MathematicsSubjectView from "./SubjectMaterial/StudentSubjectMaterialRetreive/MathematicsSubjectView";
import MathematicsTeachersView from "./SubjectMaterial/TeacherSubjectMaterialRetreive/MathematicsTeachersView";
import Classroom_timetable from "./ClassroomTimetableInsertForm/Classroom_timetable";
import Exam_timetable from "./ExamTimetableInsertForm/Exam_timetable";

class TeacherPaths extends Component{
    render() {
        return(
            <Router>
                <Switch>
                    <Route path="/teacher/subjectMaterial/noticeInsertForm" component={NoticeInsertForm} exact/>
                    <Route path="/teacher/subjectMaterial/subjectMaterialInsertForm" component={SubjectMaterialInsertionForm} exact/>
                    <Route path="/teacher/subjectMaterial/MathematicsStudentView" component={MathematicsSubjectView} exact/>
                    <Route path="/teacher/subjectMaterial/MathematicsTeachersView" component={MathematicsTeachersView} exact/>
                    // path for insert classroomTimetable form
                    <Route path="/teacher/classroom_timetable/timetableInsertForm" component={Classroom_timetable} exact/>
                    // path for insert examTimetable form
                    <Route path ="/teacher/exam_timetable/timetableInsertForm" component ={Exam_timetable} extract/>
                </Switch>
            </Router>
        )
    }
}

export default TeacherPaths