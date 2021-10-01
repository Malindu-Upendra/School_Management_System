import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoticeInsertForm from "./SubjectMaterial/NoticeInsertionForm/NoticeInsertForm";
import SubjectMaterialInsertionForm from "./SubjectMaterial/SubjectMaterialInsertionForm/SubjectMaterialInsertionForm";
import MathematicsSubjectView from "./SubjectMaterial/StudentSubjectMaterialRetreive/MathematicsSubjectView";
import SubjectMaterialTeachersView from "./SubjectMaterial/TeacherSubjectMaterialRetreive/SubjectMaterialTeachersView";
import Classroom_timetable from "./Timetable/ClassroomTimetableInsertForm/Classroom_timetable";
import ScienceSubjectView from "./SubjectMaterial/StudentSubjectMaterialRetreive/ScienceSubjectView";
import Exam_timetable from "./Timetable/ExamTimetableInsertForm/Exam_timetable";
import Exam_Timetable_TeacherView from "./Timetable/Exam_Timetable_TeacherView/Exam_Timetable_TeacherView";
import UpdateClassroomTimetable from "./Timetable/ClassroomTimetableUpdateForm/UpdateClassroomTimetable";
import NoticeUpdateForm from "./SubjectMaterial/NoticeUpdateForm/NoticeUpdateForm";
import MaterialsUpdateForm from "./SubjectMaterial/MaterialsUpdateForm/MaterialsUpdateForm";
import UpdateExamTimetable from "./Timetable/ExamTimetableUpdateForm/UpdateExamTimetable";
import ReportTest from "./Timetable/Exam_Timetable_Report/ReportTest";
import View_classroom from "./Timetable/ClassroomTimetableTeacherView/View_classroom";
import ClassroomTimetableStudentView from "./Timetable/ClassroomTimetableStudentView/ClassroomTimetableStudentView";
import Attendance from "./Attendance/Attendance";
import AddEvent from "../Public/Events/AddEvent/AddEvent";
import DisplayEvents from "../Public/Events/DisplayEvents/DisplayEvents";
import ReportGenerationForAttendance from "./Attendance/ReportGeneration";
import StudentGradeTable from "./GradeManagement/StudentGradeTable";
import HomePage from "../Public/Home/HomePage";

class TeacherPaths extends Component{
    render() {
        return(
            <Router>
                <Switch>

                    <Route path="/" component={HomePage} exact/>
                    {/*paths of Subject Materials function*/}
                    <Route path="/teacher/subjectMaterial/noticeInsertForm/:subject/:grade" component={NoticeInsertForm} exact/>
                    <Route path="/teacher/subjectMaterial/subjectMaterialInsertForm/:subject/:grade" component={SubjectMaterialInsertionForm} exact/>
                    <Route path="/teacher/subjectMaterial/MathematicsStudentView/:subject" component={MathematicsSubjectView} exact/>
                    <Route path="/teacher/subjectMaterial/SubjectMaterialTeachersView" component={SubjectMaterialTeachersView} exact/>
                    <Route path="/teacher/subjectMaterial/ScienceSubjectView/:subject" component={ScienceSubjectView} exact/>
                    <Route path="/teacher/subjectMaterial/noticeUpdateForm/:id" component={NoticeUpdateForm} exact/>
                    <Route path="/teacher/subjectMaterial/materialUpdateForm/:id" component={MaterialsUpdateForm} exact/>

                    {/*Proper Working mine (hussain)*/}
                    <Route path="/teacher/subjectMaterial/:subject/:grade" component={SubjectMaterialTeachersView} exact/>

                    {/*Adding Event for Teacher*/}
                    <Route path="/addEvent" component={AddEvent} exact/>
                    <Route path="/displayEvent" component={DisplayEvents} exact/>
                    {/*Report generation for Attendance*/}
                    <Route path="/teacher/attendance/report" component={ReportGenerationForAttendance} exact/>

                    {/*Grades Management*/}
                    <Route path="/teacher/StudentGradeTable/:grade/:subject" component={StudentGradeTable} exact/>

                    {/*Attendance Page*/}
                    <Route path="/teacher/attendance" component={Attendance} exact/>

                    path for insert classroomTimetable form
                    <Route path="/teacher/classroom_timetable/TimetableInsertForm" component={Classroom_timetable} exact/>
                    {/* path for insert examTimetable form*/}
                    <Route path ="/teacher/exam_timetable/TimetableInsertForm" component ={Exam_timetable} extract/>
                    {/* path for update classroom Timetable form*/}
                    <Route path ="/teacher/classroom_timetable/TimetableUpdateForm/:id" component={UpdateClassroomTimetable} extract/>
                    {/*path for Update exam Timetable form*/}
                    <Route path ="/teacher/exam_timetable/TimetableUpdateForm" component={UpdateExamTimetable} exact/>
                    {/*path for exam timetable teacher view*/}
                    <Route path ="/teacher/exam_timetable/TimetableTeacherView" component={Exam_Timetable_TeacherView} exact/>
                    {/*path for exam timetable report*/}
                    <Route path ="/teacher/exam_timetable/Report" component={ReportTest} exact/>
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
