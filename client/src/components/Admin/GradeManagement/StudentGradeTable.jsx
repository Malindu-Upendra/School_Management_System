import React , {Component} from "react";

class StudentGradeTable extends Component{

render() {
    return(
        <table className="table">
            <thead className="thead-dark">
            <tr>
                <th scope="col">Student No</th>
                <th scope="col">Student Name</th>
                <th scope="col">Student Result</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><Button>Edit Result</Button></td>
            </tr>
            </tbody>
        </table>
    )
}

}

export default StudentGradeTable;

