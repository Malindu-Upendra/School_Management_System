import {Component} from "react";
import AdminPaths from "./components/Admin/AdminPaths"
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeacherPaths from "./components/Teacher/TeacherPaths";

class App extends Component{

  render() {
    return(
        <>
          <AdminPaths/>
          <TeacherPaths/>
        </>
    )
  }

}

export default App;
