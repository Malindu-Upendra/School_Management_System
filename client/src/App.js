import {Component} from "react";
import AdminPaths from "./components/Admin/AdminPaths"
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeacherPaths from "./components/Teacher/TeacherPaths";
import Header from "./components/Public/Header/Header";
import PublicPaths from "./components/Public/PublicPaths";
import StudentPaths from "./components/Student/StudentPaths";
import Footer from "./components/Public/Footer/Footer";
import {BrowserRouter as Router} from "react-router-dom";
import decode from "jwt-decode";

class App extends Component{

    state = {
        user:''
    }

    componentDidMount = () => {

        if(sessionStorage.token) {
            this.setState({user:decode(sessionStorage.token).position});
        }else {
            this.setState({user: 'guest'})
        }

    }

    render() {
    return(
        <Router>
        <>

            <Header/>

            {this.state.user === 'Admin' && <AdminPaths/>}
            {this.state.user === 'teacher' && <TeacherPaths/>}
            {this.state.user === 'student' && <StudentPaths/>}
            {this.state.user === 'guest' && <PublicPaths/>}

          <Footer/>

        </>
        </Router>
    )
  }

}

export default App;
