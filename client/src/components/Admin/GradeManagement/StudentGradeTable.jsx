import React , {Component} from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


class StudentGradeTable extends Component{

render() {
    return(

        <div style={{width:"70%",marginLeft:"15%",marginTop:"100px",
            border:"#a3a375", borderWidth:"3px", borderStyle:"solid", padding:"3%",
            boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"}}>
            <Typography variant="h6" style={{textAlign:"center", marginBottom:"50px"}} gutterBottom>
                Student Database
            </Typography>

        <table className="table">
            <thead className="thead-dark">
            <tr>
                <th scope="col">Student No</th>
                <th scope="col">Student Name</th>
                <th scope="col">Student Result</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>ST001</td>
                <td>Ahmed Ameer</td>
                <td>A</td>
                <td><Button onClick={()=> window.location.href='/admin/EditStudentResult'}>Edit Result</Button></td>
            </tr>
            </tbody>
        </table>

        </div>
    )
}

}

export default StudentGradeTable;

