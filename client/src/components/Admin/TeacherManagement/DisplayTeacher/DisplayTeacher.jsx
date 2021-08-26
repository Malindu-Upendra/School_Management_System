import React, {Component} from "react";
import axios from "axios"
import {Link} from "react-router-dom"
import Typography from "@material-ui/core/Typography";

class DisplayTeacher extends Component {

    constructor(props) {
        super(props);
        this.state = {teachers:[]}
    }

    componentDidMount(){
        axios.get('http://localhost:5000/admin/getTeachers')
            .then(response =>{
            this.setState({teachers:response.data})
        } )
    }

    render() {

        return (
            <div style={{width:"70%",marginLeft:"15%",marginTop:"100px",
                border:"#a3a375", borderWidth:"3px", borderStyle:"solid", padding:"3%",
                boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"}}>
                <Typography variant="h6" style={{textAlign:"center", marginBottom:"50px"}} gutterBottom>
                    Teacher Database
                </Typography>

                <table class="table" style={{textAlign:"center"}}>
                    <thead class="thead-dark">
                    <tr>
                        <th scope="col">Employee Number</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Sectional Head Post</th>
                        <th scope="col">Selected Grade</th>
                        <th scope="col">Subject</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.teachers.map(teacher =>
                                <tr key ={teacher._id}>
                                    <td><Link to={`/admin/DeleteTeacher/${teacher._id}`} style={{width:300}}>{teacher.empNum}</Link></td>
                                    <td>{teacher.fullName}</td>
                                    <td>{String(teacher.sectionalHead)}</td>
                                    <td>{teacher.selectedGrades.map((item) =>(
                                        item+","
                                    ))}</td>
                                    <td>{teacher.subject}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }

}

export default DisplayTeacher;