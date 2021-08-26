import React , {Component} from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class StudentGradeTable extends Component{

render() {
    return(
        <>
            <Typography variant="h6" style={{textAlign:"center", marginTop: "50px"}} gutterBottom>
                Student List
            </Typography>
        <table className="table" style={{
            textAlign: "center",
            marginTop: "50px",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            border: "1px solid teal"
        }}>
            <thead className="thead-dark">
            <tr style={{backgroundColor: "teal"}}>
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
        </>
    )
}

}

export default StudentGradeTable;

