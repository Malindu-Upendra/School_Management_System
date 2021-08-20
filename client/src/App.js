import {Component} from "react";
import AdminPaths from "./components/Admin/AdminPaths"
import 'antd/dist/antd.css';
import TeacherPaths from "./components/Teacher/TeacherPaths";
import Header from "./components/Public/Header/Header";

class App extends Component{

  render() {
    return(
        <>
            <Header/>
          <AdminPaths/>
          <TeacherPaths/>
        </>
    )
  }

}

export default App;
