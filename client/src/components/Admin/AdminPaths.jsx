import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StudentRegistrationForm from "./StudentRegistrationForm/StudentRegisterForm";
import StudentRetrieve from "./StudentRetrieve/StudentRetrieve";

class AdminPaths extends Component{

    render() {
        return(

            <Router>
                <Switch>
                    <Route path="/admin/studentRegister" component={StudentRegistrationForm} exact/>
                    <Route path="/admin/studentRetrieve" component={StudentRetrieve} exact/>
                </Switch>
            </Router>

        )
    }
}

export default AdminPaths;

