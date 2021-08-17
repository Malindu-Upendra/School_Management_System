import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import StudentRegistrationForm from "./StudentRegistrationForm/StudentRegisterForm";

class AdminPaths extends Component{

    render() {
        return(

                <section>


                    <Route path="/admin/studentRegister" component={StudentRegistrationForm} exact/>


                </section>

        )
    }
}

export default AdminPaths;

