import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoticeInsertForm from "./SubjectMaterial/NoticeInsertionForm/NoticeInsertForm";
import SubjectMaterialInsertionForm from "./SubjectMaterial/SubjectMaterialInsertionForm/SubjectMaterialInsertionForm";
import MathematicsSubjectView from "./SubjectMaterial/StudentSubjectMaterialRetreive/MathematicsSubjectView";
import MathematicsTeachersView from "./SubjectMaterial/TeacherSubjectMaterialRetreive/MathematicsTeachersView";
import Classroom_timetable from "./ClassroomTimetableInsertForm/Classroom_timetable";
import ScienceTeachersView from "./SubjectMaterial/TeacherSubjectMaterialRetreive/ScienceTeachersView";
import ScienceSubjectView from "./SubjectMaterial/StudentSubjectMaterialRetreive/ScienceSubjectView";
import Exam_timetable from "./ExamTimetableInsertForm/Exam_timetable";
import UpdateClassroomTimetable from "./ClassroomTimetableUpdateForm/UpdateClassroomTimetable";
import NoticeUpdateForm from "./SubjectMaterial/NoticeUpdateForm/NoticeUpdateForm";
import MaterialsUpdateForm from "./SubjectMaterial/MaterialsUpdateForm/MaterialsUpdateForm";

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
                    <Route path="/teacher/subjectMaterial/noticeUpdateForm/:id" component={NoticeUpdateForm} exact/>
                    <Route path="/teacher/subjectMaterial/materialUpdateForm/:id" component={MaterialsUpdateForm} exact/>

                    {/*path for insert classroomTimetable form*/}
                    <Route path="/teacher/classroom_timetable/TimetableInsertForm" component={Classroom_timetable} exact/>
                    {/* path for insert examTimetable form*/}
                    <Route path ="/teacher/exam_timetable/TimetableInsertForm" component ={Exam_timetable} extract/>
                    {/* path for update classroom Timetable form*/}
                    <Route path ="/teacher/classroom_timetable/TimetableUpdateForm" component={UpdateClassroomTimetable} extract/>
                </Switch>
            </Router>
        )
    }
}

export default TeacherPaths