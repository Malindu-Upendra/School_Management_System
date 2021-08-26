import React , {Component} from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Search from "antd/es/input/Search";
import {Space} from "antd";

class StudentProfile extends Component {

    render() {
        return (
            <>
                <Typography variant="h6" style={{textAlign: "center", marginTop: "50px", marginBottom: "20px"}} gutterBottom>
                    Student Profile
                </Typography>

                <table className="table" style={{
                    textAlign: "center",
                    marginTop: "50px",
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    border: "1px solid teal",
                    marginBottom: "200px"
                }}>
                    <thead className="thead-dark">
                    <tr style={{backgroundColor: "teal"}}>
                        <th scope="col">Subject</th>
                        <th scope="col">Grade/Result</th>
                        <th scope="col">Teacher-In-Charge</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>ST0001</td>
                        <td>Ahmed Ameer</td>
                        <td>Result not uploaded</td>
                    </tr>
                    <tr>
                        <td>ST0002</td>
                        <td>Malindu Upendra</td>
                        <td>Result not uploaded</td>
                    </tr>
                    <tr>
                        <td>ST0003</td>
                        <td>Hussain Nazzimudeen</td>
                        <td>Result not uploaded</td>
                    </tr>
                    <tr>
                        <td>ST0004</td>
                        <td>Dilan Perera</td>
                        <td>Result not uploaded</td>
                    </tr>
                    </tbody>
                </table>
                <button style={{marginTop:"50px"}}>Download Student Report</button>
            </>
        )
    }
}

export default StudentProfile;