import {Component} from "react";
import AdminPaths from "./components/Admin/AdminPaths"
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeacherPaths from "./components/Teacher/TeacherPaths";
import Header from "./components/Public/Header/Header";
import PublicPaths from "./components/Public/PublicPaths";
import Footer from "./components/Public/Footer/Footer";
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component{

  render() {
    return(
        <Router>
        <>
            <Header/>
          <AdminPaths/>
          <TeacherPaths/>
          <PublicPaths/>
          <Footer/>
        </>
        </Router>
    )
  }

}

export default App;
