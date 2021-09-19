import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoticeInsertForm from "./SubjectMaterial/NoticeInsertionForm/NoticeInsertForm";
import SubjectMaterialInsertionForm from "./SubjectMaterial/SubjectMaterialInsertionForm/SubjectMaterialInsertionForm";
import MathematicsSubjectView from "./SubjectMaterial/StudentSubjectMaterialRetreive/MathematicsSubjectView";
import SubjectMaterialTeachersView from "./SubjectMaterial/TeacherSubjectMaterialRetreive/SubjectMaterialTeachersView";
import Classroom_timetable from "./ClassroomTimetableInsertForm/Classroom_timetable";
import ScienceSubjectView from "./SubjectMaterial/StudentSubjectMaterialRetreive/ScienceSubjectView";
import Exam_timetable from "./ExamTimetableInsertForm/Exam_timetable";
import UpdateClassroomTimetable from "./ClassroomTimetableUpdateForm/UpdateClassroomTimetable";
import NoticeUpdateForm from "./SubjectMaterial/NoticeUpdateForm/NoticeUpdateForm";
import MaterialsUpdateForm from "./SubjectMaterial/MaterialsUpdateForm/MaterialsUpdateForm";
import UpdateExamTimetable from "./ExamTimetableUpdateForm/UpdateExamTimetable";
import View_classroom from "./ClassroomTimetableTeacherView/View_classroom";
import ClassroomTimetableStudentView from "./ClassroomTimetableStudentView/ClassroomTimetableStudentView";
import Attendance from "./Attendance/Attendance";
import AddEvent from "../Public/Events/AddEvent/AddEvent";
import DisplayEvents from "../Public/Events/DisplayEvents/DisplayEvents";


class TeacherPaths extends Component{
    render() {
        return(
            <Router>
                <Switch>
                    {/*paths of Subject Materials function*/}
                    <Route path="/teacher/subjectMaterial/noticeInsertForm/:subject/:grade" component={NoticeInsertForm} exact/>
                    <Route path="/teacher/subjectMaterial/subjectMaterialInsertForm/:subject/:grade" component={SubjectMaterialInsertionForm} exact/>
                    <Route path="/teacher/subjectMaterial/MathematicsStudentView/:subject" component={MathematicsSubjectView} exact/>
                    <Route path="/teacher/subjectMaterial/SubjectMaterialTeachersView" component={SubjectMaterialTeachersView} exact/>
                    <Route path="/teacher/subjectMaterial/ScienceSubjectView/:subject" component={ScienceSubjectView} exact/>
                    <Route path="/teacher/subjectMaterial/noticeUpdateForm/:id" component={NoticeUpdateForm} exact/>
                    <Route path="/teacher/subjectMaterial/materialUpdateForm/:id" component={MaterialsUpdateForm} exact/>

                    {/*Adding Event for Teacher*/}
                    <Route path="/addEvent" component={AddEvent} exact/>
                    <Route path="/displayEvent" component={DisplayEvents} exact/>

                    {/*test hussain*/}
                    <Route path="/teacher/subjectMaterial/:subject/:grade" component={SubjectMaterialTeachersView} exact/>
                    {/*Attendance Page*/}
                    <Route path="/teacher/attendace" component={Attendance} exact/>

                    {/*path for insert classroomTimetable form*/}
                    <Route path="/teacher/classroom_timetable/TimetableInsertForm" component={Classroom_timetable} exact/>
                    {/* path for insert examTimetable form*/}
                    <Route path ="/teacher/exam_timetable/TimetableInsertForm" component ={Exam_timetable} extract/>
                    {/* path for update classroom Timetable form*/}
                    <Route path ="/teacher/classroom_timetable/TimetableUpdateForm" component={UpdateClassroomTimetable} extract/>
                    {/*path for Update exam Timetable form*/}
                    <Route path ="/teacher/exam_timetable/TimetableUpdateForm" component={UpdateExamTimetable} exact/>
                    {/*path for classroom timetable teachers view*/}
                    <Route path ="/teacher/classroom_timetable/TeachersView" component={View_classroom} exact/>
                    {/*path for classroom timetable teachers view*/}
                    <Route path ="/student/classroom_timetable/StudentsView" component={ClassroomTimetableStudentView} exact/>
                </Switch>
            </Router>
        )
    }
}

export default TeacherPaths