import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StudentRegistrationForm from "./StudentRegistrationForm/StudentRegisterForm";
import StudentRetrieve from "./StudentRetrieve/StudentRetrieve";
import AddTeacher from "./TeacherManagement/AddTeacher/AddTeacher";
import DisplayTeacher from "./TeacherManagement/DisplayTeacher/DisplayTeacher";
import DeleteTeacher from "./TeacherManagement/DeleteTeacher/DeleteTeacher";
import StudentGradeTable from "./GradeManagement/StudentGradeTable";
import EditStudentResult from "./GradeManagement/EditStudentResult";


class AdminPaths extends Component{

    render() {
        return(

            <Router>
                <Switch>
                    <Route path="/admin/studentRegister" component={StudentRegistrationForm} exact/>
                    <Route path="/admin/studentRetrieve" component={StudentRetrieve} exact/>
                    <Route path="/admin/addTeacher" component={AddTeacher} exact/>
                    <Route path="/admin/DisplayTeacher" component={DisplayTeacher} exact/>
                    <Route path="/admin/DeleteTeacher/:id" component={DeleteTeacher} exact/>
                    <Route path="/admin/StudentGradeTable" component={StudentGradeTable} exact/>
                    <Route path="/admin/EditStudentResult" component={EditStudentResult} exact/>
                </Switch>
            </Router>

        )
    }
}

export default AdminPaths;

